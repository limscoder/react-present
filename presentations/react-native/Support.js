import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><h3>Officially Supported Platforms</h3></li>
          <li>Android</li>
          <li>iOS</li>
          <li>Announced: Universal Windows Platform (Windows, Windows Mobile, XBox)</li>
        </ul>

        <br />
        <br />

        <ul>
          <li><h3>Community Supported Platforms</h3></li>
          <li>OSX/Cocoa</li>
        </ul>
      </div>
    );
  }
}
