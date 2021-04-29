/* eslint-disable @typescript-eslint/no-unused-expressions,react/jsx-props-no-spreading */
import React from 'react'
import { css, Global, Theme } from '@emotion/react'

type GlobalStyleProps = {
  theme: Theme
}

/**
 * Used for global app styles
 */
export const GlobalStyle = ({ theme }: GlobalStyleProps): JSX.Element => {
  const styles = css`
    html {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.colors.background};
      color: ${theme.colors.title};
      font-size: ${theme.fonts.baseSize};
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  `
  return <Global styles={styles} />
}
