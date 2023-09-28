<div style='text-align:center'>
    <h1>[PROJECT_NAME]</h1>
</div>

[PROJECT_DESCRIPTION]

<div style='text-align:center'>
    <h2>Quick Start</h2>
</div>

To set up this project you need to follow this steps:

1. Install npm dependencies of the project:

```shell
npm install
```

2. Before your run your application locally, you need to set up environment variables:

```shell
cp .env.dist .env
```

3. Start your application locally:

```shell
npm start
```

<div style='text-align:center'>
    <h2>Scripts</h2>
</div>

```shell
npm run [command_name]
```

- `start` - Launches the app in development mode on [http://localhost:3000](http://localhost:3000)
- `build` - Compiles and bundles the app for deployment\*
- `preview` - Boot up a local static web server that serves application build. It's an easy way to check if the
  production build looks OK on your local machine
- `test` - Run unit tests with vitest
- `coverage` - Run unit tests with code coverage calculation
- `lint` - Validate the code using ESLint and Prettier
- `lint:fix` - Validate and fix the code using ESLint and Prettier
- `generate` - Run CLI with commands for code generation
- `version` - Build CHANGELOG file base on git commits history

<div style='text-align:center'>
    <h2>Documentation 📝</h2>
</div>

1. [Technology stack](/docs/01-technology-stack.md)
2. [Application structure](/docs/02-application-structure.md)
3. [React Query abstraction](/docs/03-react-query-abstraction.md)
4. [Using plop commands](/docs/04-using-plop-commands.md)

<div style='text-align:center'>
    <h2>License</h2>
</div>

​This source code is licensed under the `MIT` license found in the [LICENSE](LICENSE.md) file.
