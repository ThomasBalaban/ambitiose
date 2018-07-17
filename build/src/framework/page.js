"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_element_1 = require("../ui/base-element");
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(pageTitle) {
        var _this = _super.call(this) || this;
        _this.pageTitle = pageTitle;
        return _this;
    }
    return Page;
}(base_element_1.BaseElement));
exports.Page = Page;
