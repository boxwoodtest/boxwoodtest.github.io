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
const protractor_element_extend_1 = require("protractor-element-extend");
const wait_conditions_1 = require("./wait-conditions");
class Fragment extends protractor_element_extend_1.BaseFragment {
    clickOn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForClickable();
            yield this.click();
        });
    }
    waitForClickable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_conditions_1.WaitConditions.clickable(this);
        });
    }
    waitForVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_conditions_1.WaitConditions.visible(this);
        });
    }
}
exports.Fragment = Fragment;
//# sourceMappingURL=base-fragment.wrapper.js.map