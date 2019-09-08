# WildCard

## Pre-requisites

- Install `yarn`.

## How to Run

- Run `yarn install`.

- Run `yarn start`.

## How to Install Packages

```
$ yarn add your-package-name --save
```

## How to Upgrade Packages

```
$ yarn upgrade your-package-name
```

---

## Where to Add Custom Global CSS

```
Layout/style.css
```

> Avoid unless absolutely necessary

## How to Use React's Dynamic Routing

### The Problem

React's dynamic routing is annoying. To alleviate your pain, use the `react-router-bootstrap` package [here](https://github.com/react-bootstrap/react-router-bootstrap).

### The Solution

For example, the following native `react-bootstrap` component changes from this:

```js
<Button href="/foo/bar">Foo</Button>
```

... to this:

```js
import { LinkContainer } from 'react-router-bootstrap'

<LinkContainer to="/foo/bar">
  <Button>Foo</Button>
</LinkContainer>
```
