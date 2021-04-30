/* eslint-disable @typescript-eslint/no-unused-expressions,react/jsx-props-no-spreading */
import React from 'react'
import { css, Global, Theme } from '@emotion/react'
import { mq } from './util'

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
      font-size: ${theme.fonts.baseSize};
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
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    /* With this we can increase lightly all the components based on the screen size */
    ${mq.sm} {
      html {
        font-size: calc(${theme.fonts.baseSize} + 2px);
      }
    }

    ${mq.lg} {
      html {
        font-size: calc(${theme.fonts.baseSize} + 4px);
      }
    }

    ${mq.xl} {
      html {
        font-size: calc(${theme.fonts.baseSize} + 6px);
      }
    }
  `
  return <Global styles={styles} />
}
