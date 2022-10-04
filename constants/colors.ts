import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { ThemeConfig } from "tailwindcss/types/config";
import { DefaultColors } from "tailwindcss/types/generated/colors";

export type ConfigType = ThemeConfig & {
  theme: {
    colors: DefaultColors & {
      background: string | Record<string, string>;
      popup: string | Record<string, string>;
      primaryText: string | Record<string, string>;
      primary: string | Record<string, string>;
      secondary: string | Record<string, string>;
    };
  };
};

export const TAILWIND_CONFIG = resolveConfig(
  tailwindConfig
) as unknown as ConfigType;
// export const COLORS = TAILWIND_CONFIG.theme.colors.
