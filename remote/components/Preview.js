import React, { Component, PropTypes, Text, View, WebView } from 'react-native';
import css from './PreviewCss.js';
import styles from './styles';

function getPageHtml(slideHtml) {
  return `
  <!DOCTYPE html>
  <html>

  <head>
    <title>react-present</title>
    <style>
      ${css}
    </style>
  </head>

  <body style="margin: 0" class="remote">
    ${slideHtml}
  </body>
  </html>
  `;
}

module.exports = class Preview extends Component {
  static propTypes = {
    currentSlideHtml: PropTypes.string.isRequired
  }

  componentDidUpdate() {
    this.refs.webView.reload();
  }

  render() {
    const html = getPageHtml(this.props.currentSlideHtml);

    return (
      <View style={ styles.previewContainer}>
        <WebView ref="webView" style={ styles.preview } html={ html } />
      </View>
    );
  }
};
