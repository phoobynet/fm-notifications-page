import styles from './Main.module.scss'
import { useContext } from 'react'
import { NotificationCardContext } from '@/components/NotificationCard/NotificationCardContext'

export default function Main () {
  const ctx = useContext(NotificationCardContext)

  if (!ctx?.notification) { return null }

  return (
    <div className={styles.main}>
      {ctx.notification.message && (
        <div className={styles.message}>{ctx.notification.message}</div>
      )}
    </div>
  )
}
