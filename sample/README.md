# Todo List

A small, dependency-free todo app: plain HTML, CSS, and JavaScript.

## Run

Open `index.html` in a browser. That's it — no build step, no install.

If you'd rather serve it over HTTP:

```
python -m http.server 8000
# then visit http://localhost:8000/sample/
```

## Features

- Add, complete, edit (double-click or Enter on an item), and delete todos
- Filter by All / Active / Done
- "Clear completed" bulk action
- Persists to `localStorage`, so todos survive a reload
- Light and dark themes via `prefers-color-scheme`
- Keyboard accessible

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup and the `<template>` used for list items |
| `styles.css` | Theming tokens and layout |
| `app.js` | State, persistence, rendering, and event handling |
