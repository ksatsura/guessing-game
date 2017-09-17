class GuessingGame {
	
    constructor() {
		this.a;
		this.b;
		this.c;
	}
        
	
    setRange(min, max) {     
        this.a = min;
		this.b = max;
    }

    guess() { 
	
        if (this.a == this.c && (this.b-this.a)==1){
			return this.b;
		}
		if (this.b == this.c && (this.b-this.a)==1) {
			return this.a;
		}
        this.c = Math.round((this.a + this.b)/2);
		return this.c;
    }

    lower() { 
		this.b = this.c;
    }

    greater() { 
	    this.a = this.c;
	}
}

module.exports = GuessingGame;
