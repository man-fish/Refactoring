import Movie from './Movie';
export default class Rental {
    constructor(private _movie: Movie, private _daysRented: number) {}

    public get daysRented() {
        return this._daysRented;
    }

    public get movie() {
        return this._movie;
    }

    public calculateCost(): number {
        let curAmount = 0;
        switch (this.movie.priceCode) {
            case Movie.REGULAR: //普通片
                curAmount += 2;
                if (this.daysRented > 2)
                    curAmount += (this.daysRented - 2) * 1.5;
                break;
            case Movie.NEW_RELEASE: //新片
                curAmount += this.daysRented * 3;
                break;
            case Movie.CHILDRENS: //儿童。
                curAmount += 1.5;
                if (this.daysRented > 3)
                    curAmount += (this.daysRented - 3) * 1.5;
                break;
        }
        return curAmount;
    }
}
