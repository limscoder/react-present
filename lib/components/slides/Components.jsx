import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>A single component implements a specific UX function.</li>
          <li>Multiple components are composed in unexpected ways to create pages and apps.</li>
          <li>Components use pure render functions (no global state).</li>
          <li>Components look and behave the same throughout an app.</li>
          <li>API (PropTypes) is designed for generic use cases.</li>
        </ul>
      </div>
    );
  }
});
