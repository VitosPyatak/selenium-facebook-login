import { userData } from '../../../configs/env.configs';
import { facebookUrl } from '../../../constants/general.constants';
import { DriverService } from '../../../driver/driver.service';
import { Page } from '../../page.types';
import { emailInputId, passwordInputId, submitButtonXPath } from './login.configs';

export class LoginPage implements Page {
    public execute = async (driver: DriverService) => {
        await this.openFacebook(driver);
        await this.setInputOfElements(driver);
        await this.clickLoginButton(driver);
    };

    private openFacebook = (driver: DriverService) => {
        return driver.openWebpage(facebookUrl);
    };

    private setInputOfElements = (driver: DriverService) => {
        return Promise.all([
            driver.setInputOfElement(emailInputId, userData.email),
            driver.setInputOfElement(passwordInputId, userData.password),
        ]);
    };

    private clickLoginButton = (service: DriverService) => {
        return service.clickButton(submitButtonXPath);
    };
}
