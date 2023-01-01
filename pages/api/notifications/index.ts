import type { NextApiRequest, NextApiResponse } from 'next'
import { Notification } from '@/types/Notification'
import { getFakeNotifications } from '@/data/fakeNotifications'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Notification[]>,
) {
  res.status(200).json(getFakeNotifications())
}
