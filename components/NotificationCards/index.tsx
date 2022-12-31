import { Notification } from '@/types/Notification'
import NotificationCard from '@/components/NotificationCard'
import styles from './index.module.scss'
import Header from './Header'

interface Props {
  notifications: Notification[]
  markAllAsRead: () => void
  markAllAsUnread: () => void
}

export default function NotificationCards ({
  notifications,
  markAllAsRead,
  markAllAsUnread,
}: Props) {
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
