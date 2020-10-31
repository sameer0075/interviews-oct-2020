export default class Calculation {
    constructor(expression) {
        this.expression = expression;
        this.a = 0;
        this.b = 0;
       
    }

    addition() {
        return this.a + this.b;
    }
 
    subtraction() {
        return this.a - this.b;
    }

    production() {
        return this.a * this.b;
    }

    division() {
        return this.a / this.b;
    }

    calculate() {
        let pattern = /^(\d+)([+\-*\/])(\d+)/;
        /* @TODO Add regular expression */

        if (this.expression.match(pattern)) {
            let matches = pattern.exec(this.expression);
            console.log("matches",matches);
            //matches = false

            let sign = matches[2];
            this.a=parseInt(matches[1]);
            this.b=parseInt(matches[3]);
            console.log("sign",sign);

            /**
             * @TODO Implement it
             */

            let result = false;

            switch (sign) {
                case '+':
                    // result = this.addition();
                   result = this.a + " " + matches[2] + " " + this.b + " " + "= " + this.addition();
                    break;
                case '-':
                    result = this.a + " " + matches[2] + " " + this.b + " " + "= " + this.subtraction();
                    break;
                case '*':
                    result = this.a + " " + matches[2] + " " + this.b + " " + "= " + this.production();
                    break;
                case '/':
                    result = this.a + " " + matches[2] + " " + this.b + " " + "= " + this.division();
                    break;
            }

            return result;
        }
        else {
            return false;
        }
    }
}
