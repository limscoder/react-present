import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>translation workflow</h1>

        <ul>
          <li>translation of resource bundles is currently a semi-manual process using <code>i18n studio</code></li>
          <li>CA is currently working to automate this process</li>
          <li>you'll get a result in days or weeks depending on amount to translate</li>

          <li>
            human translation is slow

            <ul>
              <li>release new features to <code>en</code> users first</li>
              <li>other user's will see <code>en</code> until translation is available</li>
              <li>OR we disable new features for untranslated locales (kinda like feature toggles)</li>
            </ul>
          </li>
        </ul>

      </div>
    );
  }
}
