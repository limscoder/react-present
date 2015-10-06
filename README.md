# react-present

A simple framework for creating presentations using React components for slides.

Build and view the example presentation:

    > npm install
    > webpack
    > chrome dist/index.html

Clone the repo and modify `index.jsx` to make your own presentation.

    // replace this line within index.jsx to use a custom slide list
    import slideList from './component-library-slides/slideList';
     ↓
    import slideList from './my-custom-slides/slideList';
