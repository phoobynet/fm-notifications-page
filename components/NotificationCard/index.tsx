import styles from './index.module.scss'
import { Notification } from '@/types/Notification'
import Avatar from '@/components/NotificationCard/Avatar'
import Header from '@/components/NotificationCard/Header'
import { NotificationCardContext } from './NotificationCardContext'
import Message from '@/components/NotificationCard/Message'

interface Props {
  notification: Notification
}

export default function NotificationCard ({ notification }: Props) {
  return (
    <NotificationCardContext.Provider value={{ notification }}>
      <div
        className={styles.notificationCard}
        data-read={notification.read}
      >
        <div className={styles.avatarContainer}>
          <Avatar />
        </div>

        <Header />

        <div className={styles.messageContainer}>
          <Message />
        </div>
      </div>
    </NotificationCardContext.Provider>
  )
}
