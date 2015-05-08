angular
	.module("cardsApp")
	.controller("CardsController", CardsController);

	function CardsController() {

		var self = this;

		self.players = [
			{name: "Kobe Bryant", team: "Los Angeles Lakers", image: "kobe.jpg"},
			{name: "Michel Jordan", team: "Chicago Bulls", image: "jordan.jpg"},
			{name: "Tracy McGrady", team: "Houston Rockets", image: "tmac.jpg"},
			{name: "Allen Iverson", team: "Philadelphia 76ers", image: "iverson.jpg"},
			{name: "Vince Carter", team: "Toronto Raptors", image: "vinsanity.jpg"},
			{name: "Charles Barkley", team: "Phoenix Suns", image: "barkley.jpg"},
			{name: "Gary Payton", team: "Seattle Supersonics", image: "garypayton.jpg"},
			{name: "Shaquille O'Neal", team: "Los Angeles Lakers", image: "shaq.jpg"},
			{name: "Lebron James", team: "Cleveland Caveliers", image: "lebron.jpg"},
			{name: "Chris Paul", team: "Los Angeles Clippers", image: "cp3.jpg"},
			{name: "Stephen Curry", team: "Golden State Warriors", image: "curry.jpg"},
			{name: "Anthony Davis", team: "New Orleans Pelicans", image: "anthonydavis.jpg"},
			{name: "Dwyane Wade", team: "Miami Heat", image: "dwade.jpg"},
			{name: "Carmelo Anthony", team: "New York Knicks", image: "carmelo.jpg"},
			{name: "Damian Lillard", team: "Portland Trailblazers", image: "lillard.jpg"},
			{name: "Scottie Pippen", team: "Chicago Bulls", image: "pippen.jpg"}
		];

	};
