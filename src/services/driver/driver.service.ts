import { By, ThenableWebDriver } from 'selenium-webdriver';

export class DriverService {
    constructor(private readonly driver: ThenableWebDriver) {}

    public openWebpage = (url: string) => {
        return this.driver.get(url);
    };

    public setInputOfElement = (elementId: string, input: string) => {
        return this.getById(elementId).then((element) => element.sendKeys(input));
    };

    public clickButton = async (elementXpath: string) => {
        return this.driver.findElement(By.xpath(elementXpath)).click();
    };

    private getById = (id: string) => {
        return this.driver.findElement(By.id(id));
    };

    private getByXpath = (xpath: string) => {
        return this.driver.findElement(By.xpath(xpath));
    };
}
