import '@emotion/react'

// Type the theme object for autocompletion inside styled components
declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      baseSize: string
    }
    colors: {
      primary: string
      primaryDark: string
      secondary: string
      secondaryDark: string
      error: string
      errorDark: string
      success: string
      successDark: string
      warning: string
      warningDark: string

      title: string
      body: string
      label: string
      placeholder: string

      background: string
      backgroundLight: string
      inputBackground: string
    }

    components: {
      tag: {
        backgroundColor: string
        textColor: string
      }
    }

    transitions: {
      color: string
      backgroundColor: string
      fill: string
    }
  }
}
