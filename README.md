# react-present

A simple, lightweight framework for creating presentations quickly using React components for slides.

Uses hot module loading via `webpack` for easy presentation development. Keyboard, mouse, gui, and url navigation between slides via `react-router`. Code highlighting and editing via `react-ace`. Presentation app can be viewed entirely from static files without any webserver or internet connection required.

## View example presentation

    > npm install
    > npm run build

Open `dist/index.html` in your browser.

## Create your own presentation

Fork and clone the repo, then:

    > npm install
    > cp -r ./lib/component-library-slides ./lib/{your-presentation-directory}
    > npm run build {your-presentation-directory}

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
