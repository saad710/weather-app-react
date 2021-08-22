import { THEME_COLOR, NAVBAR_BG, SIDEBAR_BG, DIRECTION, DARK_THEME } from "../constants";

export const setTheme = (payload) => {
  return {
    type: THEME_COLOR,
    payload,
  };
};
export const setDarkMode = (payload) => {
  return {
    type: DARK_THEME,
    payload,
  };
};
export const setNavbarBg = (payload) => {
  return {
    type: NAVBAR_BG,
    payload,
  };
};

export const setSidebarBg = (payload) => {
  return {
    type: SIDEBAR_BG,
    payload,
  };
};

export const setDir = (payload) => {
  return {
    type: DIRECTION,
    payload,
  };
};
