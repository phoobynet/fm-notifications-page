import type { NextApiRequest, NextApiResponse } from 'next'
import { Notification } from '@/types/Notification'
import markWebber from '@/assets/images/avatar-mark-webber.webp'
import angelaGray from '@/assets/images/avatar-angela-gray.webp'
import jacobThompson from '@/assets/images/avatar-jacob-thompson.webp'
import rizkyHasanuddin from '@/assets/images/avatar-rizky-hasanuddin.webp'
import kimberlySmith from '@/assets/images/avatar-kimberly-smith.webp'
import nathanPeterson from '@/assets/images/avatar-nathan-peterson.webp'
import annaKim from '@/assets/images/avatar-anna-kim.webp'
import chess from '@/assets/images/image-chess.webp'
import { subDays, subMinutes, subWeeks } from 'date-fns'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Notification[]>,
) {
  const now = new Date()
  res.status(200).json([{
    avatarSrc: markWebber,
    timestamp: subMinutes(now, 1),
    heading: 'reacted to your recent post',
    relatedContent: 'My first tournament today!',
    username: 'Mark Webber',
    read: false,
    message: '',
  }, {
    avatarSrc: angelaGray,
    timestamp: subMinutes(now, 5),
    heading: 'followed you',
    relatedContent: '',
    username: 'Angela Gray',
    read: false,
    message: '',
  }, {
    avatarSrc: jacobThompson,
    timestamp: subDays(now, 1),
    heading: 'has joined your group',
    relatedContent: 'Chess Club',
    username: 'Jacob Thompson',
    read: false,
    message: '',
  }, {
    avatarSrc: rizkyHasanuddin,
    timestamp: subDays(now, 5),
    heading: 'sent you a private message',
    relatedContent: '',
    username: 'Rizky Hasanuddin',
    read: true,
    message: 'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
  }, {
    avatarSrc: kimberlySmith,
    timestamp: subWeeks(now, 1),
    heading: 'commented on your picture',
    relatedContent: '',
    username: 'Rizky Hasanuddin',
    read: true,
    sentImageSrc: chess,
  }, {
    avatarSrc: nathanPeterson,
    timestamp: subWeeks(now, 2),
    heading: 'reacted to your recent post',
    relatedContent: '5 end-game strategies to increase your win rate',
    username: 'Nathan Peterson',
    read: true,
  }, {
    avatarSrc: annaKim,
    timestamp: subWeeks(now, 2),
    heading: 'left the group',
    relatedContent: 'Chess Club',
    username: 'Anna Kim',
    read: true,
  }])
}
