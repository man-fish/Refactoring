import Movie from './Movie';
import Rental from './Rental';

export default class Customer {
    constructor(
        private _name: string,
        private _frequentRenterPoints: number,
        private _rentals: Rental[]
    ) {}

    public addRental(arg: Rental) {
        this._rentals.push(arg);
    }

    public getName() {
        return this._name;
    }

    public statement(): string {
        let totalAmount = 0; //总消费金。
        let frequentRenterPoints = this._frequentRenterPoints; //常客积点
        let result = 'Rental Record for ' + this.getName() + '\n';

        this._rentals.forEach((rental) => {
            let curAmount = rental.calculateCost();
            frequentRenterPoints += rental.calculateFreqRenterPoints();
            result += '\t' + rental.movie.title + '\t' + curAmount + '\n';
            totalAmount += curAmount;
        });
        result += 'Amount owed is ' + totalAmount + '\n';
        result +=
            'You earned ' +
            (frequentRenterPoints - this._frequentRenterPoints) +
            ' frequent renter points';
        this._frequentRenterPoints = frequentRenterPoints;
        return result;
    }
}
