import { useMemo } from 'react'
import { Notification } from '@/types/Notification'

import styles from './NotificationsHeader.module.scss'

interface Props {
  notifications: Notification[]
  markAllAsRead: () => void
}

export default function NotificationsHeader ({
  notifications,
  markAllAsRead,
}: Props) {
  const unread = useMemo(() => {
    return notifications.filter(n => !n.read).length
  }, [notifications])

  return (
    <header className={styles.notificationsHeader}>
      <h1>Notifications</h1>
      <div className={styles.unread}>{unread}</div>
      <div className={styles.marketAllAsReadContainer}>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </div>
    </header>
  )
}
