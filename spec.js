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
describe('angularjs homepage todo list', () => {
    it('should add a todo', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://angularjs.org');
        yield protractor_1.element(protractor_1.by.model('todoList.todoText')).sendKeys('write first protractor test');
        yield protractor_1.element(protractor_1.by.css('[value="add"]')).click();
        let todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
        expect(yield todoList.count()).toEqual(3);
        expect(yield todoList.get(2).getText()).toEqual('write first protractor test');
        // You wrote your first test, cross it off the list
        todoList.get(2).element(protractor_1.by.css('input')).click();
        let completedAmount = protractor_1.element.all(protractor_1.by.css('.done-true'));
        expect(yield completedAmount.count()).toEqual(2);
    }));
});
//# sourceMappingURL=spec.js.map