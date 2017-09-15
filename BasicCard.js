function BasicCard(front, back) {
	this.front = front,
	this.back = back,
	this.readFront = function() {
		console.log(this.front);
	},

	this.readBack = function() {
		console.log(this.back);
	}
}



module.exports = BasicCard;