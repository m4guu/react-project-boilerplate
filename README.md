<div style='text-align:center'>
    <h1>🚀 REACT PROJECT BOILERPLATE 🚀</h1>
</div>

A highly scalable boilerplate code for TypeScript based React SPA applications. This project was bootstrapped with
[Vite](https://github.com/vitejs/vite).

<div style='text-align:center' ><h3>Start your new React application in seconds!</h3></div>

![GitHub stars](https://img.shields.io/github/stars/m4guu/react-project-boilerplate?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/m4guu/react-project-boilerplate?style=social)
![GitHub followers](https://img.shields.io/github/followers/m4guu?style=social)

![Version](https://img.shields.io/github/package-json/v/m4guu/react-project-boilerplate)
![GitHub License](https://img.shields.io/github/license/m4guu/react-project-boilerplate)

<div style='text-align:center'>
    <h2>How to bootstrap your React Project</h2>
</div>

To start your new React project based on the `react-project-boilerplate` you need to follow this steps:

1. Clone this repository:

```shell
git clone https://github.com/m4guu/react-project-boilerplate.git
```

2. Change the name of project directory to the name of your project. **Also don't forget to change the name of your
   application in `package.json` file.**

3. Restore git history of the project. To do that, run following commands:

```shell
sudo rm -r .git
git init
git remote add origin <your empty project repository>
git remote -v
```

4. Replace this file with `PROJECT_README.md` and fill all the placeholders with data about your project:

```shell
mv PROJECT_README.md README.md
```

5. Add all files to git history and create initial commit:

```shell
git add .
git commit -m 'Initial commit'
git push origin master
```

​Now, your project is bootstrapped successfully! 🎉 You can install dependencies and start developing your React
application 🚀

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
