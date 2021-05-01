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
      height: 100%;
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
      height: 100%;
      transition: ${theme.transitions.backgroundColor};
    }

    path {
      transition: ${theme.transitions.fill};
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
      transition: ${theme.transitions.color};

      &:hover {
        text-decoration: underline;
        color: ${theme.colors.primaryDark};
      }
    }

    #root {
      height: 100%;
    }

    // Workaround: Reach router adds this element, i want to target it to set his height
    #root-router {
      height: 100%;
    }

    /* With this we can increase lightly all the components based on the screen size */

    ${mq.xl} {
      html {
        font-size: calc(${theme.fonts.baseSize} + 2px);
      }
    }
  `
  return <Global styles={styles} />
}
