import markWebber from '@/assets/images/avatar-mark-webber.webp'
import { subDays, subMinutes, subWeeks } from 'date-fns'
import angelaGray from '@/assets/images/avatar-angela-gray.webp'
import jacobThompson from '@/assets/images/avatar-jacob-thompson.webp'
import rizkyHasanuddin from '@/assets/images/avatar-rizky-hasanuddin.webp'
import kimberlySmith from '@/assets/images/avatar-kimberly-smith.webp'
import chess from '@/assets/images/image-chess.webp'
import nathanPeterson from '@/assets/images/avatar-nathan-peterson.webp'
import annaKim from '@/assets/images/avatar-anna-kim.webp'
import cloneDeep from 'lodash/cloneDeep'
import { Notification } from '@/types/Notification'

const fakeNotifications =
  [{
    avatarSrc: markWebber,
    timestamp: subMinutes(new Date(), 1).toISOString(),
    heading: 'reacted to your recent post',
    relatedContent: 'My first tournament today!',
    username: 'Mark Webber',
    read: false,
    message: '',
  }, {
    avatarSrc: angelaGray,
    timestamp: subMinutes(new Date(), 5).toISOString(),
    heading: 'followed you',
    relatedContent: '',
    username: 'Angela Gray',
    read: false,
    message: '',
  }, {
    avatarSrc: jacobThompson,
    timestamp: subDays(new Date(), 1).toISOString(),
    heading: 'has joined your group',
    relatedContent: 'Chess Club',
    username: 'Jacob Thompson',
    read: false,
    message: '',
  }, {
    avatarSrc: rizkyHasanuddin,
    timestamp: subDays(new Date(), 5).toISOString(),
    heading: 'sent you a private message',
    relatedContent: '',
    username: 'Rizky Hasanuddin',
    read: true,
    message: 'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
  }, {
    avatarSrc: kimberlySmith,
    timestamp: subWeeks(new Date(), 1).toISOString(),
    heading: 'commented on your picture',
    relatedContent: '',
    username: 'Kimberly Smith',
    read: true,
    sentImageSrc: chess,
  }, {
    avatarSrc: nathanPeterson,
    timestamp: subWeeks(new Date(), 2).toISOString(),
    heading: 'reacted to your recent post',
    relatedContent: '5 end-game strategies to increase your win rate',
    username: 'Nathan Peterson',
    read: true,
  }, {
    avatarSrc: annaKim,
    timestamp: subWeeks(new Date(), 2).toISOString(),
    heading: 'left the group',
    relatedContent: 'Chess Club',
    username: 'Anna Kim',
    read: true,
  }]

export const getFakeNotifications = (): Notification[] => cloneDeep<Notification[]>(fakeNotifications)
