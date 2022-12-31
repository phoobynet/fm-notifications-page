import { useContext } from 'react'
import { NotificationCardContext } from '@/components/NotificationCard/NotificationCardContext'
import styles from './Message.module.scss'

export default function Message () {
  const ctx = useContext(NotificationCardContext)

  if (!ctx?.notification?.message) { return null }

  return (
    <>
      {ctx.notification.message && (
        <div className={styles.message}>{ctx.notification.message}</div>
      )}
    </>
  )
}
