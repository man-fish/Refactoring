class Site {
    constructor(private _customer: Customer | null) {}
    get customer() {
        if (!this._customer) return nullCustomer;
        return this._customer;
    }
}

class Customer {
    constructor(private _name: string, private _services: string[]) {}
    get name() {
        return this._name;
    }
    get services() {
        return this._services;
    }
}

function serve(site: Site) {
    let customer = site.customer;
    let customerName = customer.name;
    customer.services.forEach((service) => {
        console.log(customerName + 'is on serve' + service);
    });
}
// interface Nullable {
//     isNull(): true;
// }

// class NullCustomer implements Nullable {
//     isNull() {
//         return true as const;
//     }
// }

class NullCustomerV2 extends Customer {
    constructor() {
        super('', []);
    }
    get name() {
        return 'occupant';
    }
    get services() {
        return [];
    }
}

// 创建单例
let nullCustomer = new NullCustomerV2();
