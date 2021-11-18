import { DriverService } from '../../../driver/driver.service';
import { Page } from '../../page.types';
import { groupsHref } from './dashboard.configs';

export class DashboardPage implements Page {
    public execute = async (driver: DriverService) => {
        await this.openGroupsTab(driver);
    };

    private openGroupsTab = (driver: DriverService) => {
        return driver.clickLink(groupsHref);
    };
}
