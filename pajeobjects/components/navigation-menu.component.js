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
const base_fragment_wrapper_1 = require("../../utils/base-fragment.wrapper");
class NavigationMenu extends base_fragment_wrapper_1.Fragment {
    constructor(navigationMenu) {
        super(navigationMenu);
        this.home = new base_fragment_wrapper_1.Fragment(this.$('#menu-item-170'));
        this.aboutUs = new base_fragment_wrapper_1.Fragment(this.$('#menu-item-172'));
        this.services = new base_fragment_wrapper_1.Fragment(this.$('#menu-item-169'));
        this.clients = new base_fragment_wrapper_1.Fragment(this.$('#menu-item-167 '));
    }
    openHome() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.home.clickOn();
        });
    }
    openAboutUs() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.aboutUs.clickOn();
        });
    }
    openServices() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.services.clickOn();
        });
    }
    openClients() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clients.clickOn();
        });
    }
}
exports.NavigationMenu = NavigationMenu;
//# sourceMappingURL=navigation-menu.component.js.map