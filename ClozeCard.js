function ClozeCard (text, cloze) {
	this.cloze = cloze,
	this.partial = text.replace(cloze, "..."),
	this.fullText = text,
	this.readFront = function() {
		console.log(partial);
	},
	this.readBack = function() {
		console.log(fullText);
	}
}



module.exports = ClozeCard;