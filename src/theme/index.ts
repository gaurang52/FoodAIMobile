import {colors} from './colors';
import type {ColorScheme} from './colors';

import {typography} from './typography';
import type {TypographyScheme} from './typography';

import {spacing} from './spacing';
import type {SpacingScheme} from './spacing';

export {colors} from './colors';
export type {ColorScheme} from './colors';

export {typography} from './typography';
export type {TypographyScheme} from './typography';

export {spacing} from './spacing';
export type {SpacingScheme} from './spacing';

// Combined theme object
export const theme = {
  colors,
  typography,
  spacing,
} as const;

export type Theme = typeof theme;