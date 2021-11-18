"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const pages_configs_1 = require("./src/services/configs/pages.configs");
const driver_factory_1 = require("./src/services/driver/driver.factory");
const driver_service_1 = require("./src/services/driver/driver.service");
(async () => {
    const driverService = new driver_service_1.DriverService(driver_factory_1.DriverFactory.chrome);
    for (const page of pages_configs_1.pages) {
        await page.execute(driverService);
    }
})();
