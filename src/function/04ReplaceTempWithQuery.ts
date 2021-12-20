function getCharge(_quantity: number, _itemPrice: number) {
    let basePrice = _quantity * _itemPrice;
    if (basePrice > 1000) return basePrice * 0.95;
    else return basePrice * 0.98;
}

function getChargeV2(_quantity: number, _itemPrice: number) {
    if (basePrice(_quantity, _itemPrice) > 1000)
        return basePrice(_quantity, _itemPrice) * 0.95;
    else return basePrice(_quantity, _itemPrice) * 0.98;
}

function basePrice(_quantity: number, _itemPrice: number) {
    return _quantity * _itemPrice;
}

const shop = {
    getPrice(this: any) {
        let basePrice = this._quantity * this._itemPrice;
        let discountFactor;
        if (basePrice > 1000) discountFactor = 0.95;
        else discountFactor = 0.98;
        return basePrice * discountFactor;
    },
};

const shopV2 = {
    _quantity: 1,
    _itemPrice: 100,
    getPrice() {
        return this.basePrice() * this.discountFactor();
    },

    basePrice() {
        return this._quantity * this._itemPrice;
    },

    discountFactor() {
        return this.basePrice() > 1000 ? 0.95 : 0.98;
    },
};
