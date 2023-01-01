import NotificationCard from '@/components/NotificationCard'
import styles from './index.module.scss'
import Header from './Header'
import { useNotificationStore } from '@/stores/useNotificationStore'

export default function NotificationCards () {
  const notifications = useNotificationStore(state => state.notifications)
  const markAllAsRead = useNotificationStore(state => state.markAllAsRead)
  const markAllAsUnread = useNotificationStore(state => state.markAllAsUnread)

  return (
    <div className={styles.notificationCards}>
      <Header
        notifications={notifications}
        markAllAsRead={markAllAsRead}
        markAllAsUnread={markAllAsUnread}
      />
      <div className={styles.notificationCardsContainer}>
        {
          notifications.map((notification, index) => (<NotificationCard
            notification={notification}
            key={index}
          />))
        }
      </div>
    </div>
  )
}
