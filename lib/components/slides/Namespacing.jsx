import React from 'react';
import Highlight from 'react-highlight';

const namespacingCode = `
<table className="smb-DataTable">
  <tr className="smb-DataTable-Row is-draggable">
    <td className="smb-DataTable-Cell smb-DataTable-Cell--dragHandle" />
    <td className="smb-DataTable-Cell smb-DataTable-Cell--name is-editable" />
  </tr>
</table>
`;

const themeCode = `
<DataTable className="smb-DataTable--myAwesomeTheme" />
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>CSS namespacing is the least painful option</h1>

        <Highlight className="jsx">
          { namespacingCode }
        </Highlight>

        <p>Allow consumers to pass arbitrary class names for flexible customization.</p>

        <Highlight className="jsx">
          { themeCode }
        </Highlight>
      </div>
    );
  }
}
