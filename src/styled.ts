import { createStitches } from "@stitches/react";

import defaultTheme from "./theme";
import breakpoints from "./breakpoints";

export type {
  ComponentProps,
  VariantProps,
  PropertyValue,
  ScaleValue,
} from "@stitches/react";

export const {
  styled,
  theme,
  createTheme,
  css,
  config,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
} = createStitches({
  theme: defaultTheme,
  media: breakpoints,
});
