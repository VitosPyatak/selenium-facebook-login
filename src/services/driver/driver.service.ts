import { By, ThenableWebDriver, until, WebElement } from 'selenium-webdriver';
import { ahrefTemplate, ariaLabelTemplate } from '../configs/elements.templates';

export class DriverService {
    constructor(private readonly driver: ThenableWebDriver) {}

    public openWebpage = (url: string) => {
        return this.driver.get(url);
    };

    public setInputOfElement = (elementId: string, input: string) => {
        return this.getById(elementId).then((element) => element.sendKeys(input));
    };

    public clickButton = (elementXpath: string) => {
        return this.findByXPath(elementXpath).click();
    };

    public clickLink = (href: string) => {
        return this.findByXPath(ahrefTemplate(href)).click();
    };

    public findByClassname = (classname: string) => {
        return this.driver.findElement(By.className(classname));
    };

    public waitFor = (xpath: string) => {
        return this.driver.wait(until.elementLocated(By.xpath(xpath)));
    };

    public waitForClass = (classname: string) => {
        return this.driver.wait(until.elementLocated(By.className(classname)));
    };

    public waitForElementByXpath = (xpath: string) => {
        return this.driver.wait(until.elementLocated(By.xpath(xpath)));
    };

    public executeScript = (script: string, element: WebElement) => {
        return this.driver.executeScript(script, element);
    };

    public findByXPath = (elementXPath: string) => {
        return this.driver.findElement(By.xpath(elementXPath));
    };

    private getById = (id: string) => {
        return this.driver.findElement(By.id(id));
    };
}
