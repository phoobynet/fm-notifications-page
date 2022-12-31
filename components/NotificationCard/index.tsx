import styles from './index.module.scss'
import { Notification } from '@/types/Notification'
import Avatar from '@/components/NotificationCard/Avatar'
import Header from '@/components/NotificationCard/Header'
import { NotificationCardContext } from './NotificationCardContext'
import Main from '@/components/NotificationCard/Main'

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

        <div className={styles.mainContainer}>
          <Main />
        </div>
      </div>
    </NotificationCardContext.Provider>
  )
}
