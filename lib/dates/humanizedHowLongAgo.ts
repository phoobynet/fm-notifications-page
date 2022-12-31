import { differenceInMilliseconds } from 'date-fns'
import humanizeDuration from 'humanize-duration'

type PossibleDate = Date | undefined | null

/**
 * Humanized how long ago a given timestamp was (compared to now).
 * Tweaks default 'n minutes' to 'm'
 * @param {Date} timestamp
 */
export const humanizedHowLongAgo = (timestamp: PossibleDate): string => {
  if (!timestamp) {
    return ''
  }

  return humanizeDuration(differenceInMilliseconds(new Date(), timestamp), {
    units: ['y', 'mo', 'w', 'd', 'h', 'm'],
    largest: 1,
    round: true,
  }).replace(' minutes', 'm')
}
