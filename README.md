# 😎 nxt-react-app

## Why do you want it ?

nxt-react-app is a project to get you up and running with a react project, as soon as possible. It generates some sane default configurations for **webpack**, **babel**, **eslint** etc, that would require only a little or no efforts from your side for setting them up.

## Why not create-react-app ?

Because it abstracts too much info, like **babel**, **webpack** etc. under **react-scripts**, which make it harder to tweak these files as desired. And, also, it lacks some things that i and many others would almost always install prior to starting a react project.

## What does it provide ?

As of now, **nxt-react-app** comes bundled with the following packages:
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [material-ui](https://material-ui.com/)
- [styled-components](https://styled-components.com/)
- [eslint](https://eslint.org/)
    + [eslint config](https://github.com/nxtcoder17/eslint-config-madhouselabs)
- [Easy Peasy for Redux](https://easy-peasy.now.sh/)
- [HookRouter](https://github.com/Paratron/hookrouter)

## Other Things include
- Environment Handling is taken care with [dotenv](https://www.npmjs.com/package/dotenv) and [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)
- It follows a modular directory structure for development, take a sneak peak @ **sample** module for further information.
- Provides some utilities like,
    + functions for lazy loading for named exported components (React.lazy in default sense, provides support for default exports only)
    + utility methods like **doSpacing** and **fromPalette** for styling in **styled-components**, which makes use of **material-ui-theme** defined for project.
    + provides a HOC **StoreIsReady** which renders children only when redux store is ready for that module
- Production ready build ready with just `npm run build`

## Before Installing

This project uses [**pnpm**](https://github.com/pnpm/pnpm) instead of **npm** for managing node packages.

So, make sure you have it installed, or just run `npm i -g pnpm` to install it.

## How to use

```bash
    # Create your project directory
    mkdir sample-project

    # use nxt-react-app to bootstrap it
    npx nxt-react-app sample-project

    # Then, get into the repo
    cd sample-project

    # Install the dependencies
    pnpm i
```
