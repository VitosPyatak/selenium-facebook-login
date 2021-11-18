import { config as initializeConfigs } from 'dotenv';
initializeConfigs();

import { pages } from './src/services/configs/pages.configs';

import { DriverFactory } from './src/services/driver/driver.factory';

import { DriverService } from './src/services/driver/driver.service';

(async () => {
    const driverService = new DriverService(DriverFactory.chrome);
    for (const page of pages) {
        await page.execute(driverService);
    }
})();
