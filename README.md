# react-present

A simple, lightweight framework for creating presentations quickly using React components for slides.

Uses hot module loading via `webpack` for easy presentation development. Keyboard, mouse, gui, and url navigation between slides via `react-router`. Code highlighting and editing via `react-ace`. Presentation app can be viewed entirely from static files without running a webserver, and can be easily hosted via [github pages](https://pages.github.com/).

Presentations can be controlled from a mobile device with the [remote control app](remote/README.md).

## Presentations

* [Mile High Agile 2018 - Intentional Architecture](http://limscoder.github.io/react-present/mile-high-agile-2018/)
* [DevOps Enterprise Summit 2017 - Intentional Architecture](http://limscoder.github.io/react-present/intentional-architecture/)
* [EmpireJS 2017 - JS Performance](https://limscoder.github.io/react-present/js-performance/)
* [Agile Central 2017 - Blockchain Intro](https://limscoder.github.io/react-present/blockchain/)
* [Nodevember 2016 - React Native](https://limscoder.github.io/react-present/react-native/)
* [Example](https://limscoder.github.io/react-present/example/)
* [See it in action (video)](https://youtu.be/Sb9fRAKdjkQ)

## View example presentation locally

    > npm install
    > npm start

Open `http://localhost:9001` in your browser.

## Create your presentation

Clone the repo, then:

    > npm install
    > cp -r presentations/example {your-presentation-directory}
    > npm run build-dev {your-presentation-directory}

Navigate to `http://localhost:9001` in your browser. Make changes to `{your-presentation-directory}/index.js`, and they should be hot-loaded into your browser whenever you save.

## Create your slides

Slides are normal React components that can be written with JSX and ES6. You're free to include whatever markup and styles you'd like.

I recommend using [glamorous](https://github.com/paypal/glamorous) to style slides, but CSS can also be imported from within slide source code.

    import './my-slide-styles.css';

Use the `CodeBlock` component to get js syntax highlighting and code editing.

    import CodeBlock from '../components/CodeBlock';

    const block = (
      <CodeBlock>
        const foo = 'bar';
      </CodeBlock>
    );

## Screen sharing and remote meetings

Slide transitions cause some screen sharing apps to have significant lag.
Disable transitions by pressing `ctrl-t` while viewing the presentation in the browser.
