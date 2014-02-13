"use strict";

var Insulter = {
	first:  ['lazy', 'stupid', 'insecure', 'idiotic', 'slimy', 'slutty', 
		'smelly', 'pompous', 'communist', 'dicknosed', 'pie-eating', 'racist', 
		'elitist', 'white trash', 'drug-loving', 'butterfaced', 'tone deaf', 
		'ugly', 'creepy', 'syphilitic' ],
	second: ['douche', 'ass', 'turd', 'rectum', 'butt', 'cock', 'shit', 'crotch', 
		'bitch', 'prick', 'slut', 'taint', 'fuck', 'dick', 'boner', 'shart', 'nut', 'sphincter'],
	third: ['pilot', 'canoe', 'captain', 'pirate', 'hammer', 'knob', 'box', 'jockey', 
		'nazi', 'waffle', 'goblin', 'blossum',  'biscuit', 'clown', 'socket', 'monster', 
		'hound', 'dragon', 'balloon', 'tard'],
	
	insult: function() {
		return _.sample(this.first) + ' ' + _.sample(this.second) + ' ' + _.sample(this.third);
	},
	
	handler: function(elem) {
		var insult = this.insult();
		elem.textContent = insult;
	}	
};