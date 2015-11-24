import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>faq</h1>

        <ul>
          <li><code>How does this effect AppSDK public releases?</code></li>
          <li>
          We're planning on cutting a release before beginning this work.
          We are working with product to determine if we need to support future releases,
          or if this would be the last release we would need to support.
          <br />
          </li>

          <li><code>What about guitests?</code></li>
          <li>
          Guitests will live in the client app repo.
          ALM changes that break guitests will be more painful,
          but we expect the number of ALM commits effecting UI to drop off.
          <br />
          </li>

          <li><code>What about a single repo for ALM server and client?</code></li>
          <li>
          We think repos should be separated by deploy boundaries,
          and the client app service should be deployable on a separate cadence from ALM.
          <br />
          Plus Smitty's afraid of the limitations of a giant git repo.
          <br />
          </li>

          <li><code>What's the business justification?</code></li>
          <li>
          In addition to making client app development process easier and faster in general,
          this work makes the upcoming i18n initiative significantly easier.
          <br />
          </li>
        </ul>
      </div>
    );
  }
}
