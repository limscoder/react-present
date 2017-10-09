import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `@GET
@Path("/api/music/charts")
@Produces(JSON_UTF8)
public List<Song> getTopSongs(
  @RequestParam("userId") String userId, 
  @RequestParam("limit") Integer limitParam) {
    
    List<Song> songs = mpd.getAllSongs();
    int limit = limitParam == null ? songs.size() : limitParam;
    
    User user = db.getUser(userId);
    if (user != null) {
        Collections.sort(songs, user.getSortComparator);
    }
    if (songs.size() < limit) {
        return songs;    
    }
    return songs.subList(0, limit);
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>What does the following code do?</h1>

        <CodeBlock id="code">
          { code }
        </CodeBlock>
      </div>
    );
  }
}
