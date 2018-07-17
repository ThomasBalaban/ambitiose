"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var BaseElement = /** @class */ (function () {
    function BaseElement() {
        this.element = null;
    }
    BaseElement.prototype.appendToElement = function (el) {
        this.createElement();
        el.append(this.element);
        this.enableJS();
    };
    BaseElement.prototype.createElement = function () {
        var s = this.getElementString();
        this.element = jquery_1.default(s);
    };
    BaseElement.prototype.getElementString = function () {
        throw 'Please override getElement in base element';
    };
    BaseElement.prototype.enableJS = function () {
        componentHandler.upgradeElement(this.element[0]);
    };
    return BaseElement;
}());
exports.BaseElement = BaseElement;
