import type { NextApiRequest, NextApiResponse } from 'next'
import { Notification } from '@/types/Notification'
import { fakeNotifications } from '@/data/fakeNotifications'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Notification[]>,
) {
  res.status(200).json(fakeNotifications)
}
