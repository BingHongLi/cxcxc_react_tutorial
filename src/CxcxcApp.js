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
var CxcxcForm_1 = require("./CxcxcForm");
var CxcxcButton_1 = require("./CxcxcButton");
var fakeData = ['fake1', 'fake2'];
var CxcxcApp = /** @class */ (function (_super) {
    __extends(CxcxcApp, _super);
    function CxcxcApp(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            clickFreq: 0,
            questionIndex: 0
        };
        return _this;
    }
    CxcxcApp.prototype.addClickFreq = function () {
        this.setState({
            clickFreq: this.state.clickFreq + 1
        });
    };
    CxcxcApp.prototype.nextQuestion = function () {
        this.setState({
            questionIndex: this.state.questionIndex + 1
        });
    };
    CxcxcApp.prototype.backQuestion = function () {
        this.setState({
            questionIndex: this.state.questionIndex - 1
        });
    };
    CxcxcApp.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(CxcxcForm_1.default, { formDescription: fakeData[this.state.questionIndex] }),
            React.createElement("input", { type: "button", onClick: function () { return _this.addClickFreq(); }, value: this.state.clickFreq }),
            React.createElement(CxcxcButton_1.default, { onClick: function () { return _this.nextQuestion(); }, buttonValue: "下一位用戶" }),
            React.createElement(CxcxcButton_1.default, { onClick: function () { return _this.backQuestion(); }, buttonValue: "前一位用戶" })));
    };
    return CxcxcApp;
}(React.Component));
exports.default = CxcxcApp;
//# sourceMappingURL=CxcxcApp.js.map