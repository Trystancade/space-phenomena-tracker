function App() {
  const spacePhenomena = [
    { id: 1, name: "Asteroid Belt", emoji: "☄️" },
    { id: 2, name: "Galactic Nebula", emoji: "🌌" },
    { id: 3, name: "Black Hole", emoji: "🕳️" },
    { id: 4, name: "Supernova Explosion", emoji: "💥" },
    { id: 5, name: "Pulsar", emoji: "⚡" },
    { id: 6, name: "Quasar", emoji: "💫" },
    { id: 7, name: "Exoplanet", emoji: "🪐" },
    { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
    { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
    { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
  ];

  const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
  function rand() {
    return Math.floor(Math.random() * observationStatuses.length);
  }

  return (
    <div>
      {spacePhenomena.map(function (item) {
        const res = rand();
        return (
          <React.Fragment key={item.id}>
            <h3>{`${item.emoji} ${item.name}`}</h3>
            <p>The visibility of the phenomena will be:{`${observationStatuses[res]}`} </p>
            {res === 2 && <p><em>Pack your bags, this is prime viewing time</em></p>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
