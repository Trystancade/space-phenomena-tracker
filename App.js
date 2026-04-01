function App ()
{
	const spacePhenomena = [
		{id: 1, name: "Asteroid Belt", emoji: "☄️"},
		{id: 2, name: "Galactic Nebula", emoji: "🌌"},
		{id: 3, name: "Black Hole", emoji: "🕳️"},
		{id: 4, name: "Supernova Explosion", emoji: "💥"},
		{id: 5, name: "Pulsar", emoji: "⚡"},
		{id: 6, name: "Quasar", emoji: "💫"},
		{id: 7, name: "Exoplanet", emoji: "🪐"},
		{id: 8, name: "Interstellar Cloud", emoji: "☁️"},
		{id: 9, name: "Gamma-Ray Burst", emoji: "🌠"},
		{id: 10, name: "Magnetic Field Reversal", emoji: "🧲"}
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
	function rand() { return Math.floor((Math.random() * 3)) }

	return (
		<div>
			<ul> 
				{spacePhenomena.map(function (item) {
					let res = rand()
					return (
						<span>
							<p>The visibility of the phenomena will be:{`${observationStatuses[res]}`}
								<i>{res === 2 ? "Pack your bags, this is prime viewing time" : null}</i>
							</p>
							<li>{`${item.emoji}${item.name}`}</li>
						</span>
					)
				})}
			</ul>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
