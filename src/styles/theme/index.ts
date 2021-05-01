import { Theme } from '@emotion/react'

export const appTheme: Theme = {
  fonts: {
    baseSize: '16px',
  },

  colors: {
    primary: '#2EEACB',
    primaryDark: '#00A287',
    secondary: '#1CC8EE',
    secondaryDark: '#0096B7',
    error: '#ED2E7E',
    errorDark: '#C30052',
    success: '#00BA88',
    successDark: '#00966D',
    warning: '#F4B740',
    warningDark: '#946200',

    title: '#14142B',
    body: '#4E4B66',
    label: '#6E7191',
    placeholder: '#A0A3BD',

    background: '#F7F7FC',
    backgroundLight: '#ffffff',
    inputBackground: '#EFF0F6',
  },

  transitions: {
    color: 'color .3s ease-out',
    backgroundColor: 'background-color .3s ease-out',
    fill: 'fill 0.3s ease-out',
  },
}

export const appDarkTheme: Theme = {
  ...appTheme,
  colors: {
    primary: '#A4FFF0',
    primaryDark: '#00A287',
    secondary: '#82E9FF',
    secondaryDark: '#0096B7',
    error: '#FF84B7',
    errorDark: '#C30052',
    success: '#34EAB9',
    successDark: '#00966D',
    warning: '#FFD789',
    warningDark: '#946200',

    title: '#F7F7FC',
    body: '#65637A',
    label: '#6E7191',
    placeholder: '#A0A3BD',

    background: '#121212',
    backgroundLight: '#1a1a1a',
    inputBackground: '#EFF0F6',
  },
}
