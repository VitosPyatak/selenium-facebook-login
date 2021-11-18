"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ahrefTemplate = exports.roleTemplate = void 0;
const roleTemplate = (element, role) => `//${element}[@role="${role}"]`;
exports.roleTemplate = roleTemplate;
const ahrefTemplate = (href) => `//a[@href='${href}']`;
exports.ahrefTemplate = ahrefTemplate;
