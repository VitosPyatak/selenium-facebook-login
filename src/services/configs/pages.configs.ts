import { Page } from '../page/page.types';
import { DashboardPage } from '../page/pages/dashboard/dashboard.page';
import { GroupsPage } from '../page/pages/groups/groups.page';
import { LoginPage } from '../page/pages/login/login.page';

export const pages: Page[] = [new LoginPage(), new DashboardPage(), new GroupsPage()];
