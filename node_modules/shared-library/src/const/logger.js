"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGGER = void 0;
exports.LOGGER = {
    APPLICATION: Symbol.for('APPLICATION_LOGGER'),
    DELIVERY: Symbol.for('DELIVERY_LOGGER'),
    DOMAIN: Symbol.for('DOMAIN_LOGGER'),
    USECASE: Symbol.for('USECASE_LOGGER'),
    INFRASTRUCTURE: Symbol.for('INFRASTRUCTURE_LOGGER'),
};
