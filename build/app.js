"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const builder_factory_1 = require("./src/services/builder/builder.factory");
const env_configs_1 = require("./src/services/configs/env.configs");
const general_constants_1 = require("./src/services/constants/general.constants");
const driver_service_1 = require("./src/services/driver/driver.service");
const openFacebook = (service) => {
    return service.openWebpage(general_constants_1.facebookUrl);
};
const setInputOfElements = (service) => {
    return Promise.all([
        service.setInputOfElement(general_constants_1.emailInputId, env_configs_1.userData.email),
        service.setInputOfElement(general_constants_1.passwordInputId, env_configs_1.userData.password),
    ]);
};
const clickLoginButton = (service) => {
    return service.clickButton(general_constants_1.submitButtonId);
};
(async () => {
    (0, dotenv_1.config)();
    const driverService = new driver_service_1.DriverService(builder_factory_1.BuilderFactory.chrome);
    await openFacebook(driverService);
    await setInputOfElements(driverService);
    await clickLoginButton(driverService);
})();
//# sourceMappingURL=app.js.map