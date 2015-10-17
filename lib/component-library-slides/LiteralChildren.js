import React from 'react';
import CodeBlock from '../components/CodeBlock';

const childCode = `<DataTable>
  <Column title="Name" />
  <Column title="FavoriteColor" />
  <Row rowIndex={ 0 } name="Suzy" color="black" />
  <Row rowIndex={ 1 } name="Fred" color="brown" />
  <Pager pageSize={ 2 } startIndex={ 0 } />
</DataTable>`;

const sortChildCode = `render() {
  const columns = [];
  const rows = [];
  const pagers = [];

  React.Children.forEach(this.props.children, (child) => {
    if (child.type === Column) {
      columns.push(child);
    } else if (child.type === Row) {
      rows.push(child);
    } else if (child.type === Pager) {
      pagers.push(child);
    }
  });

  ...
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Child elements don't have to be literal children.</h1>

        <CodeBlock id="child">
          { childCode }
        </CodeBlock>

        <CodeBlock id="sort-child">
          { sortChildCode }
        </CodeBlock>
      </div>
    );
  }
}
