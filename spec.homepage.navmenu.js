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
const main_page_1 = require("./pajeobjects/main.page");
const mainPage = new main_page_1.MainPage();
describe('Check if pages exist by clicking on the items in Navigation Menu', () => {
    describe('Given Homepage', () => {
        beforeAll(() => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('http://boxwoodstudio.org');
        }));
        describe('when clicks on "About Us"', () => {
            beforeAll(() => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.openAboutUs();
            }));
            it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.waitForVisible();
                expect(yield mainPage.title.getText()).toContain('About Us');
            }));
        });
        describe('when clicks on "Service"', () => {
            beforeAll(() => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.openServices();
            }));
            it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.waitForVisible();
                expect(yield mainPage.title.getText()).toContain('Services');
            }));
        });
        describe('when clicks on "Clients"', () => {
            beforeAll(() => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.openClients();
            }));
            it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.waitForVisible();
                yield mainPage.navigationmenu.waitForClickable();
                expect(yield mainPage.title.getText()).toContain('Clients');
            }));
        });
        describe('when clicks on "Home"', () => {
            beforeAll(() => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.openHome();
            }));
            it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
                yield mainPage.navigationmenu.waitForVisible();
                expect(yield mainPage.titleHome.getText()).toContain('Need to develop, test or design something?');
            }));
        });
    });
});
//# sourceMappingURL=spec.homepage.navmenu.js.map