# Quasar App (quasar-select)

See [https://github.com/quasarframework/quasar/issues/5600](https://github.com/quasarframework/quasar/issues/5600) for a detailled description.

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm start
```

### Reproduce the bug (?)

In one terminal:

```bash
npm start
```

In another terminal:

```bash
npm run test:e2e
```

### Relevant code:

Page with select: [src/pages/Index.vue](src/pages/Index.vue)
Test code: [test/cypress/plugins/index.js](test/cypress/plugins/index.js)
