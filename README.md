# react-present

A simple, lightweight framework for creating presentations quickly using React components for slides.

Uses hot module loading via `webpack` for easy presentation development. Keyboard, mouse, gui, and url navigation between slides via `react-router`. Code highlighting and editing via `react-ace`. Presentation app can be viewed entirely from static files without running a webserver, and can be easily hosted via [github pages](https://pages.github.com/).

 * [Example presentation](https://limscoder.github.io/react-present/pages/react-native/index.html)
 * [See it in action (video)](https://www.youtube.com/watch?v=nQo0EdHNjto)
 * Control presentations from a mobile device with the [remote control app](remote/README.md)

## View example presentation locally

    > npm install
    > npm start

Open `dist/index.html` in your browser.

## Create your presentation

Fork and clone the repo, then:

    > npm install
    > cp -r ./presentations/component-library ./presentations/{your-presentation-directory}
    > npm run build-dev {your-presentation-directory}

Navigate to `http://localhost:9001` in your browser. Make changes to `{your-presentation-title}/slideList`, and they should be hot-loaded into your browser whenever you save.

## Create your slides

Slides are normal React components that can be written with JSX and ES6. You're free to include whatever markup and CSS you'd like in your slides.

Include and order slides within `{your-presentation-title}/slideList`.

Require CSS directly from within slide source code.

    require('./my-slide-styles.css');

Use the `CodeBlock` component to get js syntax highlighting and code editing.

    import CodeBlock from '../components/CodeBlock';

    const block = (
      <CodeBlock>
        const foo = 'bar';
      </CodeBlock>
    );

## Package presentation as zip file

Create a zip file containing a presentation within the `built-presentations` directory.
Extract the zip file and open `index.html` to view the presentation.

    > npm run package {your-presentation-directory}

## Screen sharing and remote meetings

Slide transitions cause some screen sharing apps like WebEx to have significant lag.
Disable transitions by pressing `ctrl-t`.
