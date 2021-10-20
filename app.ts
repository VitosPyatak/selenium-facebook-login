import { config as initializeConfigs } from 'dotenv';
import { DriverFactory } from './src/services/driver/driver.factory';
import { userData } from './src/services/configs/env.configs';
import { emailInputId, facebookUrl, passwordInputId, submitButtonXPath } from './src/services/constants/general.constants';
import { DriverService } from './src/services/driver/driver.service';

const openFacebook = (service: DriverService) => {
    return service.openWebpage(facebookUrl);
};

const setInputOfElements = (service: DriverService) => {
    return Promise.all([
        service.setInputOfElement(emailInputId, userData.email),
        service.setInputOfElement(passwordInputId, userData.password),
    ]);
};

const clickLoginButton = (service: DriverService) => {
    return service.clickButton(submitButtonXPath);
};

(async () => {
    initializeConfigs();
    const driverService = new DriverService(DriverFactory.chrome);
    await openFacebook(driverService);
    await setInputOfElements(driverService);
    await clickLoginButton(driverService);
})();
