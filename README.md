# react-spark

**This is an experimental proof-of-concept implementation of Spark as React components.**

Usage examples of `react-spark` components can be found in `example/src/App.js`.

---

This project was generated with [`create-react-library`](https://www.npmjs.com/package/create-react-library)

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.
