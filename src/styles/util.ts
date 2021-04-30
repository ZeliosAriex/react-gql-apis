import { MediaSizes } from './types'
import { MQ_BREAKPOINT_NAMES, MQ_BREAKPOINTS } from './constants'

const mq: {
  [key in MediaSizes]?: string
} = {}

MQ_BREAKPOINTS.forEach((bp, idx) => {
  mq[MQ_BREAKPOINT_NAMES[idx]] = `@media (min-width: ${bp}px)`
})

export { mq }
