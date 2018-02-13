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
describe('Given the Homepage', () => {
    const homeMenuItem = protractor_1.element(protractor_1.by.css('#menu-item-170'));
    const aboutUsMenuItem = protractor_1.element(protractor_1.by.css('#menu-item-172'));
    const servicesMenuItem = protractor_1.element(protractor_1.by.css('#menu-item-169'));
    const clientsMenuItem = protractor_1.element(protractor_1.by.css('#menu-item-167'));
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://boxwoodstudio.org');
    }));
    describe('when clicks on "About Us"', () => {
        beforeAll(() => __awaiter(this, void 0, void 0, function* () {
            yield aboutUsMenuItem.click();
        }));
        it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
            const title = yield protractor_1.element(protractor_1.by.css('.page-title'));
            console.log(yield title.getText());
            return expect(title.getText()).toContain('About Us');
        }));
    });
    describe('when clicks on "Service"', () => {
        beforeAll(() => __awaiter(this, void 0, void 0, function* () {
            yield servicesMenuItem.click();
        }));
        it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
            const title = yield protractor_1.element(protractor_1.by.css('.page-title'));
            return expect(title.getText()).toContain('Services');
        }));
    });
    describe('when clicks on "Clients"', () => {
        beforeAll(() => __awaiter(this, void 0, void 0, function* () {
            yield clientsMenuItem.click();
        }));
        it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
            const title = yield protractor_1.element(protractor_1.by.css('.page-title'));
            return expect(title.getText()).toContain('Clients');
        }));
    });
    describe('when clicks on "Home"', () => {
        beforeAll(() => __awaiter(this, void 0, void 0, function* () {
            yield homeMenuItem.click();
        }));
        it('then the following page should exist', () => __awaiter(this, void 0, void 0, function* () {
            const title = yield protractor_1.element(protractor_1.by.css('h2.widget-title'));
            return expect(title.getText()).toContain('Need to develop, test or design something?');
        }));
    });
    //    beforeAll(async () => {
    //
    //     // await element(by.css('#menu-item-170')).click();
    //     // await element(by.css('#menu-item-172')).click();
    //     await homeMenuItem.click();
    //     await aboutUsMenuItem.click();
    // });
    //    it('then the following text should be on the page', async () => {
    //       const title = await element(by.css('.page-title'));
    //
    //       return expect(title.getText()).toContain('About Us');
    //    });
});
//# sourceMappingURL=spec.test.page.js.map