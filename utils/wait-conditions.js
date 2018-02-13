"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const constants_1 = require("./constants");
class WaitConditions {
    static clickable(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(element), constants_1.Constants.waitPreset.waitCondition.defaultTimeout, `${element.locator()} was expected to be clickable`);
        });
    }
    static visible(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(element), constants_1.Constants.waitPreset.waitCondition.defaultTimeout, `${element.locator()} was expected to be visible`);
        });
    }
}
exports.WaitConditions = WaitConditions;
//# sourceMappingURL=wait-conditions.js.map