"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementsService = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class ElementsService {
    driver;
    constructor(driver) {
        this.driver = driver;
    }
    setInputOfElement = (elementId, input) => {
        return this.getById(elementId).then((element) => element.sendKeys(input));
    };
    clickButton = async () => { };
    getById = (id) => {
        return this.driver.findElement(selenium_webdriver_1.By.id(id));
    };
}
exports.ElementsService = ElementsService;
//# sourceMappingURL=elements.service.js.map