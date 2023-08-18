"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApplication = void 0;
const const_1 = require("@shared-library/const");
const ioc_1 = require("@shared-library/ioc");
let BaseApplication = class BaseApplication {
    get log() {
        return this.logger.get(Symbol.keyFor(const_1.LOGGER.APPLICATION).toLowerCase(), Symbol.keyFor(this.id).toLowerCase());
    }
};
__decorate([
    ioc_1.inject(const_1.TYPES.CONFIG)
], BaseApplication.prototype, "config", void 0);
__decorate([
    ioc_1.inject(const_1.TYPES.DEBUGGER)
], BaseApplication.prototype, "debug", void 0);
__decorate([
    ioc_1.inject(const_1.TYPES.LOGGER)
], BaseApplication.prototype, "logger", void 0);
BaseApplication = __decorate([
    ioc_1.injectable()
], BaseApplication);
exports.BaseApplication = BaseApplication;
