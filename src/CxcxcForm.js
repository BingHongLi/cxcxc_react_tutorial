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
var CxcxcForm = /** @class */ (function (_super) {
    __extends(CxcxcForm, _super);
    function CxcxcForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CxcxcForm.prototype.render = function () {
        return (React.createElement("form", null,
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, this.props.formDescription))))));
    };
    return CxcxcForm;
}(React.Component));
exports.default = CxcxcForm;
//# sourceMappingURL=CxcxcForm.js.map