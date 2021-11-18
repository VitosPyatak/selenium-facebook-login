"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages = void 0;
const dashboard_page_1 = require("../page/pages/dashboard/dashboard.page");
const login_page_1 = require("../page/pages/login/login.page");
exports.pages = [new login_page_1.LoginPage(), new dashboard_page_1.DashboardPage()];
