class Employee {
    constructor(private _type: EmployeeType, private _salery: number) {}
    payAmount() {
        return this._type.payAmount(this);
    }
    getType() {
        return this._type.getTypeCode();
    }
    getMonthlySalary(): number {
        return this._salery;
    }
    getCommission(): number {
        return this._salery * 0.2;
    }
    getBonus(): number {
        return this._salery * 0.5;
    }
}

abstract class EmployeeType {
    public static readonly ENGINEER = 0b001;
    public static readonly SALESMAN = 0b010;
    public static readonly MANAGER = 0b100;
    abstract getTypeCode(): number;
    abstract payAmount(emp: Employee): number;
}

class Engineer extends EmployeeType {
    getTypeCode() {
        return EmployeeType.ENGINEER;
    }
    payAmount(emp: Employee) {
        return emp.getMonthlySalary();
    }
}

class SaleMan extends EmployeeType {
    getTypeCode() {
        return EmployeeType.ENGINEER;
    }
    payAmount(emp: Employee) {
        return emp.getMonthlySalary() + emp.getCommission();
    }
}

class Manager extends EmployeeType {
    getTypeCode() {
        return EmployeeType.ENGINEER;
    }
    payAmount(emp: Employee) {
        return emp.getMonthlySalary() + emp.getBonus();
    }
}
