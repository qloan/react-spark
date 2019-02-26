# react-spark

**This is an experimental proof-of-concept implementation of Spark as React components.**

Usage examples of `react-spark` components can be found in `example/src/App.js`.

---

## Useful Sources

This project was generated with [`create-react-library`](https://www.npmjs.com/package/create-react-library)

Code examples of working components [`here`](http://half-education.surge.sh)

See current progress [`here`](https://github.com/qloan/react-spark/projects/1)

## Available Components

- [`Accordions`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Accordions.js)
- [`Alerts`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Alerts.js)
- [`Buttons`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Buttons.js)
- [`Cards`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Cards.js)
- [`Dictionaries`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Dictionaries.js)
- [`Dividers`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Dividers.js)
- [`Dropdowns`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Masthead/Masthead.js)
- [`Footer`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Footer.js)
- [`Grid`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Grid/Grid.js)
- [`Icons`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Icons.js)
- [`Inputs`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Inputs.js)
- [`Layout`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Layout/Layout.js)
- [`Links`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Links.js)
- [`Lists`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Lists.js)
- [`Masthead`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Masthead/Masthead.js)
- [`Modals`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Modals.js)
- [`Select`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Select.js)
- [`Tables`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Tables.js)
- [`Toggles`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Toggles.js)
- [`Typography`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Typography.js)

* [`Alerts`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Alerts.js)
* [`Buttons`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Buttons.js)
* [`Cards`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Cards.js)
* [`Dictionaries`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Dictionaries.js)
* [`Inputs`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Inputs.js)
* [`Links`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Links.js)
* [`Masthead`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Masthead.js)
* [`Modals`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Modals.js)
* [`Select`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Select.js)
* [`Tables`](https://github.com/qloan/react-spark/blob/feat/redesign-phase1/example/src/components/examples/Tables.js)

## Development

Local development is broken into two parts (ideally using two tabs).

1. create a .env file in example/ and add this as the contents

`SKIP_PREFLIGHT_CHECK=true`

2. Now run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

3. Run the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example 
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time..
