(function () {
  "use strict";

  var STORAGE_KEY = "todos.v1";

  var els = {
    composer: document.getElementById("composer"),
    input: document.getElementById("input"),
    list: document.getElementById("list"),
    filters: document.getElementById("filters"),
    empty: document.getElementById("empty"),
    count: document.getElementById("count"),
    summary: document.getElementById("summary"),
    clearDone: document.getElementById("clear-done"),
  };

  var todos = load();
  var filter = "all";

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      /* storage full or unavailable — app still works in-memory */
    }
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function visible() {
    if (filter === "active") return todos.filter(function (t) { return !t.done; });
    if (filter === "done") return todos.filter(function (t) { return t.done; });
    return todos;
  }

  function add(text) {
    text = text.trim();
    if (!text) return;
    todos.unshift({ id: uid(), text: text, done: false });
    save();
    render();
  }

  function toggle(id) {
    var t = todos.find(function (x) { return x.id === id; });
    if (!t) return;
    t.done = !t.done;
    save();
    render();
  }

  function remove(id) {
    todos = todos.filter(function (x) { return x.id !== id; });
    save();
    render();
  }

  function rename(id, text) {
    text = text.trim();
    if (!text) return remove(id);
    var t = todos.find(function (x) { return x.id === id; });
    if (!t) return;
    t.text = text;
    save();
    render();
  }

  function startEdit(li, todo) {
    if (li.querySelector(".item__edit")) return;
    var span = li.querySelector(".item__text");
    var input = document.createElement("input");
    input.className = "item__edit";
    input.type = "text";
    input.value = todo.text;
    input.maxLength = 200;

    var committed = false;
    function commit() {
      if (committed) return;
      committed = true;
      rename(todo.id, input.value);
    }

    input.addEventListener("blur", commit);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { commit(); }
      else if (e.key === "Escape") { committed = true; render(); }
    });

    li.replaceChild(input, span);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }

  function row(todo) {
    var li = document.createElement("li");
    li.className = "item" + (todo.done ? " is-done" : "");

    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "item__check";
    check.checked = todo.done;
    check.setAttribute("aria-label", "Toggle: " + todo.text);
    check.addEventListener("change", function () { toggle(todo.id); });

    var span = document.createElement("span");
    span.className = "item__text";
    span.textContent = todo.text;
    span.title = "Double-click to edit";
    span.addEventListener("dblclick", function () { startEdit(li, todo); });

    var del = document.createElement("button");
    del.type = "button";
    del.className = "item__del";
    del.textContent = "×";
    del.setAttribute("aria-label", "Delete: " + todo.text);
    del.addEventListener("click", function () { remove(todo.id); });

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(del);
    return li;
  }

  function render() {
    var shown = visible();

    els.list.textContent = "";
    shown.forEach(function (t) { els.list.appendChild(row(t)); });

    els.empty.hidden = shown.length > 0;

    var left = todos.filter(function (t) { return !t.done; }).length;
    var done = todos.length - left;

    els.count.textContent = left + (left === 1 ? " item left" : " items left");
    els.summary.textContent = todos.length === 0
      ? "Nothing here yet"
      : done + " of " + todos.length + " complete";
    els.clearDone.hidden = done === 0;
  }

  els.composer.addEventListener("submit", function (e) {
    e.preventDefault();
    add(els.input.value);
    els.input.value = "";
    els.input.focus();
  });

  els.filters.addEventListener("click", function (e) {
    var btn = e.target.closest(".filters__btn");
    if (!btn) return;
    filter = btn.dataset.filter;
    Array.prototype.forEach.call(els.filters.children, function (b) {
      b.classList.toggle("is-active", b === btn);
    });
    render();
  });

  els.clearDone.addEventListener("click", function () {
    todos = todos.filter(function (t) { return !t.done; });
    save();
    render();
  });

  render();
})();
