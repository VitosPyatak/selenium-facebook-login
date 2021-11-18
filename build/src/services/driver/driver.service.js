"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverService = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const elements_templates_1 = require("../configs/elements.templates");
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
    clickButton = async (elementXpath) => {
        return this.findByXPath(elementXpath).click();
    };
    clickLink = async (href) => {
        return this.findByXPath((0, elements_templates_1.ahrefTemplate)(href)).click();
    };
    findByXPath = (elementXPath) => {
        return this.driver.findElement(selenium_webdriver_1.By.xpath(elementXPath));
    };
    getById = (id) => {
        return this.driver.findElement(selenium_webdriver_1.By.id(id));
    };
}
exports.DriverService = DriverService;
