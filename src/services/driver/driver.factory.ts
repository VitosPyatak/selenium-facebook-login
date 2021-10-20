import { Builder, Capabilities, ThenableWebDriver } from 'selenium-webdriver';

export class DriverFactory {
    private static chromeDriver: ThenableWebDriver;

    static get chrome() {
        if (!this.chromeDriver) {
            this.chromeDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
        }
        return this.chromeDriver;
    }
}
