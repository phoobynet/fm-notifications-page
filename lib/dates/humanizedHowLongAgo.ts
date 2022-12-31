import { durationHumanizer } from '@/lib/dates/durationHumanizer'
import { differenceInMilliseconds } from 'date-fns'

type PossibleDate = Date | undefined | null

/**
 * Humanized how long ago a given timestamp was (compared to now).
 * @param {Date} timestamp
 */
export const humanizedHowLongAgo = (timestamp: PossibleDate): string => {
  if (!timestamp) {
    return ''
  }

  return durationHumanizer(differenceInMilliseconds(new Date(), timestamp), {
    units: ['y', 'mo', 'w', 'd', 'h', 'm'],
    largest: 1,
    round: true,
  }).replace(' m', 'm')
}
