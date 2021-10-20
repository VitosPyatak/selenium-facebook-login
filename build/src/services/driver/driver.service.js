"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverService = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class DriverService {
    driver;
    constructor(driver) {
        this.driver = driver;
    }
    openWebpage = (url) => {
        return this.driver.get(url);
    };
    setInputOfElement = (elementId, input) => {
        return this.getById(elementId).then((element) => element.sendKeys(input));
    };
    clickButton = async (elementId) => {
        return this.driver.findElement(selenium_webdriver_1.By.xpath(`//button[@type='submit']`)).click();
    };
    getById = (id) => {
        return this.driver.findElement(selenium_webdriver_1.By.id(id));
    };
}
exports.DriverService = DriverService;
//# sourceMappingURL=driver.service.js.map