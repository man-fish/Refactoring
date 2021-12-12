// export interface PriceStrategy {
//     calculateCost(daysRented: number): number;
//     calculateFreqRenterPoints(daysRented: number): number;
// }

// export class RegularPriceStrategy implements PriceStrategy {
//     public calculateCost(daysRented: number) {
//         return 2 + daysRented > 2 ? (daysRented - 2) * 1.5 : 0;
//     }

//     calculateFreqRenterPoints(daysRented: number): number {
//         return 1;
//     }
// }

// export class NewReleasePriceStrategy implements PriceStrategy {
//     calculateCost(daysRented: number) {
//         return daysRented * 3;
//     }

//     calculateFreqRenterPoints(daysRented: number): number {
//         return daysRented > 1 ? 2 : 1;
//     }
// }

// export class ChildrenPriceStrategy implements PriceStrategy {
//     calculateCost(daysRented: number) {
//         return 1.5 + daysRented > 3 ? (daysRented - 3) * 1.5 : 0;
//     }

//     calculateFreqRenterPoints(daysRented: number): number {
//         return 1;
//     }
// }

export abstract class PriceStrategy {
    public abstract calculateCost(daysRented: number): number;
    public calculateFreqRenterPoints(daysRented: number): number {
        return 1;
    }
}

export class RegularPriceStrategy extends PriceStrategy {
    public calculateCost(daysRented: number) {
        return 2 + daysRented > 2 ? (daysRented - 2) * 1.5 : 0;
    }
}

export class NewReleasePriceStrategy extends PriceStrategy {
    calculateCost(daysRented: number) {
        return daysRented * 3;
    }

    calculateFreqRenterPoints(daysRented: number): number {
        return daysRented > 1 ? 2 : 1;
    }
}

export class ChildrenPriceStrategy extends PriceStrategy {
    calculateCost(daysRented: number) {
        return 1.5 + daysRented > 3 ? (daysRented - 3) * 1.5 : 0;
    }
}
