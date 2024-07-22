import {ColorTypes} from './types/ColorType';

export const LightTheme: ColorTypes = {
  background: '#EFEFEF',
  containerBackground: '#FFFFFF',
  titleGreen: '#89E3B5',
  titleDefault: 'black',
  signInUpButton: 'black',
  signInUpButtonTextColor: 'white',
  placeholder: 'gray'
};

export const DarkTheme: ColorTypes = {
  background: '#27282E',
  containerBackground: '#404040',
  titleGreen: '#89E3B5',
  titleDefault: 'white',
  signInUpButton: 'white',
  signInUpButtonTextColor: 'black',
  placeholder: 'white'
};

const themes = {
  light: {...LightTheme},
  dark: {...DarkTheme},
};

export const getThemeColor = (theme: 'light' | 'dark' = 'light') => {
  const themeMode = themes[theme];
  return themeMode;
};