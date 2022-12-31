import { createContext } from 'react'
import { Notification } from '@/types/Notification'

export interface NotificationCardContextState {
  notification: Notification
}

export const NotificationCardContext = createContext<NotificationCardContextState | null>(null)


