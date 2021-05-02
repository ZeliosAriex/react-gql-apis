import { HTMLAttributes } from 'react'
import { RouteComponentProps } from '@reach/router'

// Used to provide base props to components like basic HTML attributes
export type BaseProps<T = HTMLElement> = HTMLAttributes<T>

// Provides BaseProps as well as Route props to use them inside a Router
export type PageBaseProps = BaseProps & RouteComponentProps
