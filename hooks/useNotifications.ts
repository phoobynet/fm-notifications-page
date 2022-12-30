import { useEffect, useState } from 'react'
import { Notification } from '@/types/Notification'
import axios from 'axios'
import { parseISO } from 'date-fns'

const cleanNotificationTimestamps = (notifications: Notification[]): Notification[] =>
  notifications.map(n => ({
    ...n,
    timestamp: parseISO(n.timestamp.toString()),
  }))

const getNotifications = async (): Promise<Notification[]> => axios.get<Notification[]>('/api/notifications').then(
  r => r.data).then(
  cleanNotificationTimestamps)

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        getNotifications().then(setNotifications)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return {
    notifications,
    loading,
  }
}
