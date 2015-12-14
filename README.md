# rally-present

A private Rally version of [react-present](https://github.com/limscoder/react-present) for internal presentations.

## Presentations

Click to download, open `index.html` to view.

 * [rally-i18n](https://github.com/RallySoftware/rally-present/raw/zips/built-presentations/rally-i18n.zip)
 * [repo-supremo](https://github.com/RallySoftware/rally-present/raw/zips/built-presentations/repo-supremo.zip)

# react-present

Uses hot module loading via `webpack` for easy presentation development. Keyboard, mouse, gui, and url navigation between slides via `react-router`. Code highlighting and editing via `react-ace`. Presentation app can be viewed entirely from static files without running a webserver, and can be easily hosted via [github pages](https://pages.github.com/).

 * [Example presentation](https://limscoder.github.io/react-present/pages/component-library-slides/index.html)
 * [See it in action (video)](https://www.youtube.com/watch?v=nQo0EdHNjto)

## View example presentation locally

    > npm install
    > npm run build

Open `dist/index.html` in your browser.

## Create your presentation

Fork and clone the repo, then:

    > npm install
    > cp -r ./lib/component-library-slides ./lib/{your-presentation-directory}
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
