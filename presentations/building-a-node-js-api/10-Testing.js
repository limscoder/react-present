import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `describe(routeMusicDb, function () {
  
  it('should get top charts', async() => {
    // given
    const uri = routeMusicDb + '/charts?limit=2';

    // when
    const res = await request(app_url).get(uri);
      
    // then
    expect(res.status).to.equal(200);  
    var songs = res.body;
    expect(songs.length).to.equal(2);

    var song = songs[0];
    expect(song.playCount).to.equal(0);
  }));
});
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Testing</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
