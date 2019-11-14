import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

require('brace');
require('brace/mode/jsx');
require('brace/theme/cobalt'); // light: chrome, dark: cobalt

export default class CodeBlock extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    width: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      showEditor: false
    };
  }

  componentDidMount() {
    // editor screws up slide transition for some reason
    window.requestAnimationFrame(() => {
      this.setState({ showEditor: true });
    });
  }

  _renderEditor() {
    if (this.state.showEditor) {
      const options = {
        showFoldWidgets: false,
        showInvisibles: false,
        showPrintMargin: false,
        displayIndentGuides: false,
        highlightActiveLine: false,
        showLineNumbers: (typeof this.props.children === 'string' && this.props.children.match(/\n/))
      };

      return <AceEditor mode="jsx"
        theme="cobalt"
        name={this.props.id || 'code-block'}
        value={this.props.children}
        width="auto"
        maxLines={20}
        editorProps={{ '$blockScrolling': Infinity }}
        setOptions={options} />;
    }
  }

  render() {
    const style = {};
    if (this.props.width) {
      style.width = this.props.width;
    };

    return (
      <div className="rcp-CodeBlock"
        onClick={this._onClick}
        style={style}>
        {this._renderEditor()}
      </div>
    );
  }

  _onClick(e) {
    e.stopPropagation();
  }
}
