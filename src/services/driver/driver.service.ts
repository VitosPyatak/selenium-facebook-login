import { By, ThenableWebDriver } from 'selenium-webdriver';
import { ahrefTemplate } from '../configs/elements.templates';

export class DriverService {
    constructor(private readonly driver: ThenableWebDriver) {}

    public openWebpage = (url: string) => {
        return this.driver.get(url);
    };

    public setInputOfElement = (elementId: string, input: string) => {
        return this.getById(elementId).then((element) => element.sendKeys(input));
    };

    public clickButton = async (elementXpath: string) => {
        return this.findByXPath(elementXpath).click();
    };

    public clickLink = async (href: string) => {
        return this.findByXPath(ahrefTemplate(href)).click();
    };

    public findByXPath = (elementXPath: string) => {
        return this.driver.findElement(By.xpath(elementXPath));
    };

    private getById = (id: string) => {
        return this.driver.findElement(By.id(id));
    };
}
