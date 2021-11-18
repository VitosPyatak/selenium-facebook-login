import { Page } from '../page/page.types';
import { DashboardPage } from '../page/pages/dashboard/dashboard.page';
import { LoginPage } from '../page/pages/login/login.page';

export const pages: Page[] = [new LoginPage(), new DashboardPage()];
