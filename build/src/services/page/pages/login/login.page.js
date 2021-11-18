"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const env_configs_1 = require("../../../configs/env.configs");
const general_constants_1 = require("../../../constants/general.constants");
const login_configs_1 = require("./login.configs");
class LoginPage {
    execute = async (driver) => {
        await this.openFacebook(driver);
        await this.setInputOfElements(driver);
        await this.clickLoginButton(driver);
    };
    openFacebook = (driver) => {
        return driver.openWebpage(general_constants_1.facebookUrl);
    };
    setInputOfElements = (driver) => {
        return Promise.all([
            driver.setInputOfElement(login_configs_1.emailInputId, env_configs_1.userData.email),
            driver.setInputOfElement(login_configs_1.passwordInputId, env_configs_1.userData.password),
        ]);
    };
    clickLoginButton = (service) => {
        return service.clickButton(login_configs_1.submitButtonXPath);
    };
}
exports.LoginPage = LoginPage;
