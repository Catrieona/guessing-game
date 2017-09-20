class GuessingGame {
    constructor() {

    	this.memory=[]
    	this.tmp=0
    }

    setRange(min, max) {
    	for (i=min; i<max; i++)
    		{this.memore.push(i)}

    }

    guess() {
    	this.tmp=Math.floor(Math.random()*this.memory.length)
    	return this.memory[this.tmp]

    }

    lower() {
    	this.memory.splice(this.tmp)

    }

    greater() {
    	this.memore.splice(0, this.tmp)

    }
}

module.exports = GuessingGame;
