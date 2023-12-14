"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("../models/customer"));
const customers = [];
function getCustomer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(customers.find(c => c.id === id));
        });
    });
}
function getCustomers() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(customers);
        });
    });
}
function addCustomer(customer) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (!customer.name || !customer.cpf)
                return reject(new Error(`Invalid customer.`));
            const newCustomer = new customer_1.default(customer.name, customer.cpf);
            customers.push(newCustomer);
            return resolve(newCustomer);
        });
    });
}
function updateCustomer(id, newCustomer) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const index = customers.findIndex(c => c.id === id);
            if (index >= 0) {
                if (newCustomer.name && customers[index].name !== newCustomer.name)
                    customers[index].name = newCustomer.name;
                if (newCustomer.cpf && customers[index].cpf !== newCustomer.cpf)
                    customers[index].cpf = newCustomer.cpf;
                return resolve(customers[index]);
            }
            return resolve(undefined);
        });
    });
}
function deleteCustomer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const index = customers.findIndex(c => c.id === id);
            if (index >= 0) {
                customers.splice(index, 1);
                return resolve(true);
            }
            return resolve(false);
        });
    });
}
exports.default = {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
};
