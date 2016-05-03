import React from 'react';
import AceEditor from 'react-ace';

require('brace');
require('brace/mode/jsx');
require('brace/theme/cobalt'); // light: chrome, dark: cobalt

export default class CodeBlock extends React.Component {
  static propTypes = {
    id: React.PropTypes.string
  };

  render() {
    return (
      <div className="rcp-CodeBlock"
           onClick={ this._onClick }>
        <AceEditor mode="jsx"
                   theme="cobalt"
                   name={ this.props.id || 'code-block' }
                   value={ this.props.children }
                   width="auto"
                   maxLines={ 25 }
                   editorProps={ {'$blockScrolling': Infinity} } />
      </div>
    );
  }

  _onClick(e) {
    e.stopPropagation();
  }
}
