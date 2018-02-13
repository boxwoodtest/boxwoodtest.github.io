"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.Locators = {
    Homepage: {
        NavigationMenu: {
            home: protractor_1.$('#menu-item-170'),
            aboutUs: protractor_1.$('#menu-item-172'),
            services: protractor_1.$('#menu-item-169'),
            clients: protractor_1.$('#menu-item-167 ')
        },
        Footer: {
            copyright: protractor_1.$('[class="site-info-inner"]')
        }
    },
};
//# sourceMappingURL=entites-locators.js.map