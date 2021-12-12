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
}
