import type { NextApiRequest, NextApiResponse } from 'next'
import { fakeNotifications } from '@/data/fakeNotifications'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<void>,
) {
  if (req.method === 'PUT') {
    fakeNotifications.forEach((n) => {
      n.read = false
    })

    res.status(200).send()
  } else {
    res.status(404).send()
  }
}
