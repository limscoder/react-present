import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>appsdk option #2</h1>

        <ul>
          <li>separate <code>i18n</code> processes for <code>churro</code> and <code>appsdk</code></li>
          <li>pros: no dependency hell</li>
          <li>cons: no ICU support, formats and translations could get out of sync, client downloads are larger</li>
        </ul>

      </div>
    );
  }
}
