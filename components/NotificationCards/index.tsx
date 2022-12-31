import { Notification } from '@/types/Notification'
import NotificationCard from '@/components/NotificationCard'
import styles from './index.module.scss'

interface Props {
  notifications: Notification[]
}

export default function NotificationCards ({ notifications }: Props) {
  return (
    <div className={styles.notificationCards}>
      {
        notifications.map((notification, index) => (<NotificationCard
          notification={notification}
          key={index}
        />))
      }
    </div>
  )
}
