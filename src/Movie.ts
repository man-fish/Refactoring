import {
    PriceStrategy,
    RegularPriceStrategy,
    NewReleasePriceStrategy,
    ChildrenPriceStrategy,
} from './Price';
export default class Movie {
    public static REGULAR = 0 as const;
    public static NEW_RELEASE = 1 as const;
    public static CHILDRENS = 2 as const;
    // @ts-ignore
    private priceStrategy: PriceStrategy;

    constructor(private _title: string, private _priceCode: number) {
        this.setPriceStrategy(_priceCode);
    }

    private setPriceStrategy(priceCode: number) {
        switch (priceCode) {
            case Movie.REGULAR: //普通片
                this.priceStrategy = new RegularPriceStrategy();
                break;
            case Movie.NEW_RELEASE: //新片
                this.priceStrategy = new NewReleasePriceStrategy();
                break;
            case Movie.CHILDRENS: //儿童。
                this.priceStrategy = new ChildrenPriceStrategy();
                break;
            default:
                throw new Error('invalid price code;');
        }
    }

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
        return this.priceStrategy.calculateCost(daysRented);
    }

    public calculateFreqRenterPoints(daysRented: number): number {
        return this.priceStrategy.calculateFreqRenterPoints(daysRented);
    }
}
