import humanizeDuration from 'humanize-duration'

export const durationHumanizer = humanizeDuration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => 'y',
      mo: () => 'month',
      w: () => 'week',
      d: () => 'day',
      h: () => 'hour',
      m: () => 'm',
      s: () => 's',
      ms: () => 'ms',
    },
  },
})
