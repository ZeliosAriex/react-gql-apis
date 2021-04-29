import { HTMLAttributes } from 'react'
import { RouteComponentProps } from '@reach/router'

export interface PageProps
  extends HTMLAttributes<HTMLElement>,
    RouteComponentProps {}
