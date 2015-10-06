# react-present

A super simple framework for creating presentations using React components for slides.

Build and view the example presentation:

    > npm install
    > webpack
    > chrome dist/index.html

Clone the repo and modify `index.jsx` to make your own presentation.

    // replace this line within index.jsx to use a custom slide list
    import slideList from './component-library-slides/slideList';
     ↓
    import slideList from './my-custom-slides/slideList';
    
Slides can be written with JSX and ES6 or plain ol' Javascript. You're free to include whatever markup you'd like in your slides.

Use the `CodeBlock` component to get JSX syntax highlighting and code editing via `react-ace`.

    import CodeBlock from '../components/CodeBlock'
    
    <CodeBlock>
        const foo = 'bar';
    </CodeBlock>
