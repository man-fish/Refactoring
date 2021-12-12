export default class Movie {
    public static REGULAR = 0 as const;
    public static NEW_RELEASE = 1 as const;
    public static CHILDRENS = 2 as const;

    constructor(private _title: string, private _priceCode: number) {}

    public get priceCode() {
        return this._priceCode;
    }

    public set priceCode(arg: number) {
        this._priceCode = arg;
    }

    public get title() {
        return this._title;
    }

    public calculateCost(daysRented: number): number {
        let result = 0;
        switch (this.priceCode) {
            case Movie.REGULAR: //普通片
                result += 2;
                if (daysRented > 2) result += (daysRented - 2) * 1.5;
                break;
            case Movie.NEW_RELEASE: //新片
                result += daysRented * 3;
                break;
            case Movie.CHILDRENS: //儿童。
                result += 1.5;
                if (daysRented > 3) result += (daysRented - 3) * 1.5;
                break;
        }
        return result;
    }

    public calculateFreqRenterPoints(daysRented: number): number {
        return this._priceCode == Movie.NEW_RELEASE && daysRented > 1 ? 2 : 1;
    }
}
