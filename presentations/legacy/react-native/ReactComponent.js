import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const componentCode = `function Avatar(props) {
  const className = props.isSpeaker ?
    'speaker' : 'audience';

  return (
    <div className={ className }>
      <img src={ props.src } />
      <span>{ props.name }</span>
    </div>);
}`;

export default function Slide() {
  return (
    <div>
      <h1><span className="rcp-Highlight">Declarative</span> components</h1>

      <CodeBlock>
        { componentCode }
      </CodeBlock>
    </div>
  );
}