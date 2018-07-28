import { Keyframes, config } from 'react-spring'

export const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${to}%,0)`, opacity: 0 },
      to: { transform: `translate3d(0,${from}%,0)`, opacity: 1 },
      config: config.slow
    }
  })