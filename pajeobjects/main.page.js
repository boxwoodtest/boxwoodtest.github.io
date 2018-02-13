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
const navigation_menu_component_1 = require("./components/navigation-menu.component");
const base_fragment_wrapper_1 = require("../utils/base-fragment.wrapper");
class MainPage {
    constructor() {
        this.navigationmenu = new navigation_menu_component_1.NavigationMenu(protractor_1.$('[class="main-navigation-container"]'));
        this.copyright = new base_fragment_wrapper_1.Fragment(protractor_1.$('[class="site-info-inner"]'));
        this.title = new base_fragment_wrapper_1.Fragment(protractor_1.$('[class="page-title"]'));
        this.titleHome = new base_fragment_wrapper_1.Fragment(protractor_1.$('h2.widget-title'));
    }
    waitForComponentsVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForMain();
            yield this.navigationmenu.waitForVisible();
        });
    }
    waitForMain() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.navigationmenu.waitForVisible();
            }
            catch (error) {
                yield this.copyright.waitForVisible();
            }
        });
    }
}
exports.MainPage = MainPage;
//# sourceMappingURL=main.page.js.map