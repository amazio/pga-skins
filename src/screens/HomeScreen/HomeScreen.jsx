import React from 'react';

function HomeScreen({leaderboard}) {
let players = leaderboard.map(p => <div>{p.curPosition} - {p.shortName} - {p.total} thru {p.thru}</div>);
  if (!players.length) players = <div>LOADING...</div>;
  
  return (
    <section>
      {players}
    </section>
  );
}

export default HomeScreen;