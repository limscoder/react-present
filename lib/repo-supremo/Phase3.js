import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>phase 3: one repo to rule them all?</h1>

        <ul>
          <li>We think repos should be separated by deploy boundaries, and the
              client app service should be deployable on a separate cadence from ALM.</li>
          <li>This work is directionally correct if we want to move to a single repo.</li>
          <li>We may or may not be able to maintain history for such a large repo. TBD.</li>
        </ul>
      </div>
    );
  }
}
