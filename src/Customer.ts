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
            let curAmount = 0;
            switch (rental.movie.priceCode) {
                case Movie.REGULAR: //普通片
                    curAmount += 2;
                    if (rental.daysRented > 2)
                        curAmount += (rental.daysRented - 2) * 1.5;
                    break;
                case Movie.NEW_RELEASE: //新片
                    curAmount += rental.daysRented * 3;
                    break;
                case Movie.CHILDRENS: //儿童。
                    curAmount += 1.5;
                    if (rental.daysRented > 3)
                        curAmount += (rental.daysRented - 3) * 1.5;
                    break;
            }
            frequentRenterPoints++;
            // add bonus for a two day new release rental
            if (
                rental.movie.priceCode == Movie.NEW_RELEASE &&
                rental.daysRented > 1
            ) {
                frequentRenterPoints++; //show figures for this rental（显示此笔租借记录）
            }
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
