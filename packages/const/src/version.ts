import pkg from '@/../package.json';

import { BRANDING_NAME, ORG_NAME } from './branding';

export const CURRENT_VERSION = pkg.version;

export const isDesktop = process.env.NEXT_PUBLIC_IS_DESKTOP_APP === '1';

// @ts-ignore
export const isCustomBranding = false;
// @ts-ignore
export const isCustomORG = false;
