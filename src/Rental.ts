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
        return this._movie.calculateCost(this._daysRented);
    }

    public calculateFreqRenterPoints(): number {
        return this._movie.calculateFreqRenterPoints(this._daysRented);
    }
}
