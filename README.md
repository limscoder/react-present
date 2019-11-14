# react-present

A lightweight framework for creating presentations using simple React components.

Keyboard, mouse, gui, and url navigation between slides via `react-router`. Code highlighting and editing via `react-ace`. Presentation app can be viewed entirely from static files without running a webserver, and can be easily hosted via [github pages](https://pages.github.com/).

Presentations can be controlled from a mobile device with the [remote control app](remote/README.md).

## Presentations

* [Example presentation](https://limscoder.github.io/react-present/example/)
* [Conference presentations made with react-present](https://github.com/limscoder/present)
* [See it in action (video)](https://youtu.be/Sb9fRAKdjkQ)

## View example presentation locally

Recommended node/npm version: `8.*/6.*`.

    > git clone https://github.com/limscoder/react-present.git
    > npm install
    > npm start

Open `http://localhost:9001` in a browser.

## Create a presentation

Create a new git repo for your presentation.

    > mkdir {your-presentation-repo}
    > git init {your-presentation-repo}

Copy the example presentation into your presentation repo.

    > cp -r presentations/example {your-presentation-repo}/{your-presentation-name}
    > npm run build-dev {your-presentation-repo}/{your-presentation-name}

Navigate to `http://localhost:9001` in your browser. Changes made to `{your-presentation-repo}/{your-presentation-name}/index.js` will be hot-loaded into the browser.

## Customize a presentation

Customize the slides defined in `index.js`.

```javascript
import React from 'react';
import { renderPresentation } from 'react-present';
import { Slide, Title } from 'react-present/components/content';

import imgSrc from './images/bikes.gif'

renderPresentation({
  title: 'Example Presentation',
  align: 'top',
  slides: [
    <Slide>
      <Title>Use pre-built components like "Title"</Title>
    </Slide>,
    <Slide>
      <p>Use standard HTML components</p>
    </Slide>,
    <Slide>
      <Title>Include an image</Title>
      <img src={ imgSrc } alt="image" />
    </Slide>
  ]
});
```

## Style slides

I recommend using [glamorous](https://github.com/paypal/glamorous) to style slides, but standard CSS can also be imported from within slide source code.

    import './my-slide-styles.css';

Use the `CodeBlock` component to get syntax highlighting and code editing.

    import CodeBlock from 'react-present/components/CodeBlock';

    const block = (
      <CodeBlock>
        const foo = 'bar';
      </CodeBlock>
    );

## Publish a presentation

    > npm run build {your-presentation-repo}/{your-presentation-name}

The `build` command will create a `docs` directory containing `index.html` and all required resources for your presentaion. Open `index.html` in a browser to display your presentation locally. Commit the `docs` directory to your git repo and host your presentation with [github pages](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site). The presentation is also packaged in a `.zip` file within the `docs` directory for easy sharing.
