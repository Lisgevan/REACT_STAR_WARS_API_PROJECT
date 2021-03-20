// imports
import React from "react";

import handle from "./handle.png";
import SWlogo from "./Star_Wars_Logo.svg";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			introDiv: false,
			charDiv: true,
			name: null,
			species: null,
			gander: null,
			height: null,
			homeworld: null,
			affiliations: [],
			image: null,
			charNum: null,
		};
	}

	// onclick event
	clickMe = () => {
		this.setState({
			open: false,
			introDiv: true,
			// charDiv: false,
		});
	};

	// API request
	getCharacter = () => {
		const randomNum = Math.ceil(Math.random() * 88);
		const url = `https://akabab.github.io/starwars-api/api/id/${randomNum}.json`;
		this.setState({
			charDiv: true,
			open: true,
		});
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					open: !this.state.open,
					charDiv: false,
					name: data.name,
					species: data.species,
					gender: data.gender,
					height: data.height,
					homeworld: data.homeworld,
					affiliations: data.affiliations,
					image: data.image,
					charNum: randomNum,
				});
			});
	};

	render() {
		return (
			<div>
				{/* light saber */}
				<div className="light_saber">
					<div className={`back ${this.state.open ? "open" : ""}`}>
						<div className="outer_glow"></div>
						<div className="middle_glow"></div>
						<div className="core_glow"></div>
						<div className="handle" onClick={() => this.getCharacter()}>
							<img onClick={() => this.clickMe()} src={handle} alt="" />
						</div>
					</div>
				</div>

				{/* intro text */}
				<div id="intro" className={`star-wars-intro ${this.state.introDiv ? "introDiv" : ""}`}>
					{/* introCharDivs<!-- Blue Intro Text --> */}
					<p className="intro-text">Some time after its creation, in a browser far... far... away...</p>

					{/* <!-- Logo Image or Text goes in here --> */}
					<h2 className="main-logo">
						<img src={SWlogo} alt="" />
					</h2>

					{/* <!-- All Scrolling Content Goes in here --> */}
					<div className="main-content">
						<div className="title-content">
							<p className="content-header">
								Star Wars Randomizer
								<br />A randon charachter picker
							</p>

							<br />

							<p className="content-body">
								After hours of Google search, built by "Polar Notion" and modified by Lisgevan, here is
								a random charachter picker using the starwars API found at
								https://akabab.github.io/starwars-api/ as part of the "The Ultimate 2021 Fullstack Web
								Development Bootcamp" - "Section 14: React 101: Reacty for beginners" practice project.
								<br />
								<hr />
								<br />
								Turn the light-saber ON and OFF to see different charachters
							</p>
						</div>
					</div>
				</div>

				{/* randomizer text */}
				<div id="charShow" className={`star-wars-intro ${this.state.charDiv ? "charDiv" : ""}`}>
					{/* <!-- Blue Intro Text --> */}
					<p className="intro-text">
						Loading random <br /> charachter info . . .
					</p>

					{/* <!-- Logo Image or Text goes in here --> */}
					{/* / */}

					{/* <!-- All Scrolling Content Goes in here --> */}
					<div className="main-content">
						<div className="title-content2">
							<p className="content-header">
								Star Wars Randomizer has picked character No{this.state.charNum}. <br />
								Here is some info about this character.
							</p>
							<br />
							<hr />
							<br />
							<p className="content-header">Name: {this.state.name}</p>

							<div id="randInfo" className="content-body text-center">
								<p>Species: {!this.state.species ? "No data available" : this.state.species}</p>
								<p>Gender: {!this.state.gender ? "No data available" : this.state.gender}</p>
								<p>Height: {!this.state.height ? "No data available" : `${this.state.height}m`}</p>
								<p>Homeworld: {!this.state.homeworld ? "No data available" : this.state.homeworld}</p>
								<p>Affiliations:</p>
								<ul>
									{this.state.affiliations.length > 0
										? this.state.affiliations.map(affiliation => {
												return <li>{affiliation}</li>;
										  })
										: "No data available"}
								</ul>
								<img src={this.state.image} alt="" style={{ width: "500px", height: "600px" }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
