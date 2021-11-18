export const roleTemplate = (element: string, role: string) => `//${element}[@role="${role}"]`;

export const ahrefTemplate = (href: string) => `//a[@href='${href}']`;

export const ariaLabelTemplate = (ariaLabel: string, element = 'div') => `//${element}[@aria-label='${ariaLabel}']`;
