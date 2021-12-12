import Movie from './Movie';
import Rental from './Rental';

export default class Customer {
    constructor(private _name: string, private _rentals: Rental[]) {}

    public addRental(arg: Rental) {
        this._rentals.push(arg);
    }

    public getName() {
        return this._name;
    }

    public statement(): string {
        let result = 'Rental Record for ' + this.getName() + '\n';

        this._rentals.forEach((rental) => {
            result +=
                '\t' +
                rental.movie.title +
                '\t' +
                rental.calculateCost() +
                '\n';
        });
        result += 'Amount owed is ' + this.getTotalCost() + '\n';
        result +=
            'You earned ' + this.getTotalFreq() + ' frequent renter points';
        return result;
    }

    public getTotalCost(): number {
        let result = 0;
        this._rentals.forEach((rental) => {
            result += rental.calculateCost();
        });
        return result;
    }

    public getTotalFreq(): number {
        let result = 0;
        this._rentals.forEach((rental) => {
            result += rental.calculateFreqRenterPoints();
        });
        return result;
    }
}
