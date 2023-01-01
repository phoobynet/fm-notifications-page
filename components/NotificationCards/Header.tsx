import { useMemo } from 'react'
import { Notification } from '@/types/Notification'

import styles from './Header.module.scss'

interface Props {
  notifications: Notification[]
  markAllAsRead: () => Promise<void>
  markAllAsUnread: () => Promise<void>
}

export default function Header ({
  notifications,
  markAllAsRead,
  markAllAsUnread,
}: Props) {
  const notRead = useMemo(() => {
    return notifications.filter(n => !n.read).length
  }, [notifications])

  return (
    <header className={styles.header}>
      <h1>Notifications</h1>
      <div className={styles.unread}>{notRead}</div>
      <div className={styles.marketAllAsReadContainer}>
        {notRead === 0
          ? <button
            onClick={markAllAsUnread}
            className={styles.markAllAsRead}
          >Mark all as unread
          </button>
          : <button
            onClick={markAllAsRead}
            className={styles.markAllAsRead}
          >Mark all as read
          </button>}
      </div>
    </header>
  )
}
