import React from "react";
import CodeBlock from "../../lib/components/CodeBlock";

const statelessCode = `import immutable from 'immutable';

DropDown.propTypes = {
  options: PropTypes.instanceOf(Immutable.Map),
  items: PropTypes.instanceOf(Immutable.Array)
};`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Props should be immutable</h1>

        <ul>
          <li>
            Use
            {" "}
            <code>immutablejs</code>
            {" "}
            data structures instead of
            {" "}
            <code>Object</code>
            {" "}
            and
            {" "}
            <code>Array</code>
          </li>
          <li>
            Harder to make mistakes, easier to debug, and easier to implement
            {" "}
            <code>shouldComponentUpdate</code>
          </li>
        </ul>

        <CodeBlock>
          {statelessCode}
        </CodeBlock>
      </div>
    );
  }
}
