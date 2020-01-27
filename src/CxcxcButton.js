"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CxcxcButton = /** @class */ (function (_super) {
    __extends(CxcxcButton, _super);
    function CxcxcButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CxcxcButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("input", { type: "button", onClick: function () { return _this.props.onClick(); }, value: this.props.buttonValue }));
    };
    return CxcxcButton;
}(React.Component));
exports.default = CxcxcButton;
//# sourceMappingURL=CxcxcButton.js.map