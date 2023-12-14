"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customerController_1 = __importDefault(require("../controllers/customerController"));
const router = express_1.default.Router();
router.get('/:id', customerController_1.default.getCustomer);
router.get('/', customerController_1.default.getCustomers);
router.post('/', customerController_1.default.postCustomer);
router.patch('/:id', customerController_1.default.patchCustomer);
router.delete('/:id', customerController_1.default.deleteCustomer);
exports.default = router;
