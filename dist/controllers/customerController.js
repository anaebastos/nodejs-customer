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
const customerRepository_1 = __importDefault(require("../repositories/customerRepository"));
function getCustomer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const customer = yield customerRepository_1.default.getCustomer(parseInt(id));
        if (customer)
            res.json(customer);
        else
            res.sendStatus(404);
    });
}
function getCustomers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const customers = yield customerRepository_1.default.getCustomers();
        res.json(customers);
    });
}
function postCustomer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = req.body;
        const result = yield customerRepository_1.default.addCustomer(customer);
        if (result)
            res.status(201).json(result);
        else
            res.sendStatus(400);
    });
}
function patchCustomer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const customer = req.body;
        const result = yield customerRepository_1.default.updateCustomer(parseInt(id), customer);
        if (result)
            res.json(result);
        else
            res.sendStatus(404);
    });
}
function deleteCustomer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const success = yield customerRepository_1.default.deleteCustomer(parseInt(id));
        if (success)
            res.sendStatus(204);
        else
            res.sendStatus(404);
    });
}
exports.default = {
    getCustomer,
    getCustomers,
    postCustomer,
    patchCustomer,
    deleteCustomer
};
