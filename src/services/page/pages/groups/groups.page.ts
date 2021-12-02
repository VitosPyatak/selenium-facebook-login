import { Browser, By } from 'selenium-webdriver';
import { ahrefTemplate, ariaLabelTemplate, roleTemplate } from '../../../configs/elements.templates';
import { pressElementScript } from '../../../constants/general.constants';
import { DriverService } from '../../../driver/driver.service';
import { Page } from '../../page.types';
import { groupSettingsAriaLabel, groupSettingsClass, notificationDotsAriaLabel } from './groups.configs';

export class GroupsPage implements Page {
    public execute = async (driver: DriverService) => {
        await this.pressOptionsButton(driver);
        await this.switchNotificationDots(driver);
    };

    private pressOptionsButton = async (driver: DriverService) => {
        await driver.waitFor(this.settingsAriaLabel);
        const button = await driver.findByXPath(this.settingsAriaLabel);
        return driver.executeScript(pressElementScript, button);
    };

    private switchNotificationDots = async (driver: DriverService) => {
        await driver.waitForElementByXpath(this.showNotificationDotsAriaLabel);
        const notificationSwitch = await driver.findByXPath(this.showNotificationDotsAriaLabel);
        return driver.executeScript(pressElementScript, notificationSwitch);
    };

    private get settingsAriaLabel() {
        return ariaLabelTemplate(groupSettingsAriaLabel);
    }

    private get showNotificationDotsAriaLabel() {
        return roleTemplate('div', 'menuitemcheckbox');
    }
}
