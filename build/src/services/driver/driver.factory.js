"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverFactory = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class DriverFactory {
    static chromeDriver;
    static get chrome() {
        if (!this.chromeDriver) {
            this.chromeDriver = new selenium_webdriver_1.Builder().withCapabilities(selenium_webdriver_1.Capabilities.chrome()).build();
        }
        return this.chromeDriver;
    }
}
exports.DriverFactory = DriverFactory;
