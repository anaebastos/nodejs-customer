"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(name, cpf) {
        this.id = Customer.nextId++;
        this.name = name;
        this.cpf = cpf;
    }
}
exports.default = Customer;
Customer.nextId = 1;
