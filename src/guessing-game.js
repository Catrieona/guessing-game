class GuessingGame {
    constructor() {

        this.memory=[]
        this.tmp=0
    }

    setRange(min, max) {
        
        for (let i=min; i<=max; i++)
            {this.memory.push(i)}

    }

    guess() {
        this.tmp= Math.floor(this.memory.length/2)
        return this.memory[this.tmp]
    }

    lower() {
        this.memory.splice(this.tmp+1)

    }

    greater() {
        this.memory.splice(0, this.tmp)
    }
}

module.exports = GuessingGame;
