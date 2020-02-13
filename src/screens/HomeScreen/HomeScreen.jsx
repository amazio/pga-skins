import React from 'react';

function HomeScreen({leaderboard}) {
  let players;
  if (leaderboard) {
    players = leaderboard.map(p => <div>{p.shortName}</div>);
  } else {
    players = <div>LOADING...</div>;
  }
  return (
    <section>
      {players}
    </section>
  );
}

export default HomeScreen;