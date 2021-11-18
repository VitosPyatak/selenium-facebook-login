"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPage = void 0;
const dashboard_configs_1 = require("./dashboard.configs");
class DashboardPage {
    execute = async (driver) => {
        await this.openGroupsTab(driver);
    };
    openGroupsTab = (driver) => {
        return driver.clickLink(dashboard_configs_1.groupsHref);
    };
}
exports.DashboardPage = DashboardPage;
