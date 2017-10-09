import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `api.get('/api/music/charts', async(req, res) => {
  
  const limit = parseInt(req.query.limit);
  const userId = req.query.userId;

  const songs = await mpd.getAllSongs();
      
  if (userId) { 
    const user= await User.findById(userId);
  
    if (user) {
      songs.sort(user.getSortType());
    }
  }
        
  res.send(songs.slice(0, limit)); 
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>GET /api/music/charts?userId=xyz&limit=25</h1>

        <CodeBlock id="code">
          { code }
        </CodeBlock>
      </div>
    );
  }
}
