var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var action = process.argv[2];
var frontText = process.argv[3];
var backCloze = process.argv[4];
var cards = [];


switch(action) {
	case "basic":
			var newCard = new BasicCard(frontText, backCloze);
			cards.push(newCard);
			newCard.readFront();
			newCard.readBack();
			break;

	case "cloze":
			if (frontText.includes(backCloze)) {
				var newCard = ClozeCard(frontText, backCloze);
				cards.push(newCard);
				newCard.readFront();
				newCard.readBack();
		}
			else {
				console.log("Cloze not found");
			}
			break;
	default:
			console.log("Please enter a valid command");
			break;		

}
