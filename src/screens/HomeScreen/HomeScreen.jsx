import React from 'react';

function HomeScreen({leaderboard}) {
  let players = leaderboard.map(p => <div>{p.shortName}</div>);
  if (!players.length) players = <div>LOADING...</div>;
  
  return (
    <section>
      {players}
    </section>
  );
}

export default HomeScreen;