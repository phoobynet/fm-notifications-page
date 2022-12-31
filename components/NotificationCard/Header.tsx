import { useContext, useMemo } from 'react'
import { NotificationCardContext } from '@/components/NotificationCard/NotificationCardContext'
import { humanizedHowLongAgo } from '@/lib/dates/humanizedHowLongAgo'
import styles from './Header.module.scss'
import Image from 'next/image'

export default function Header () {
  const ctx = useContext(NotificationCardContext)

  const ago = useMemo<string>(() => humanizedHowLongAgo(ctx?.notification?.timestamp), [ctx?.notification])

  if (!ctx?.notification) { return null }

  return (
    <div className={styles.header}>
      <div>
        <span className={styles.username}>{ctx.notification.username}</span>
        <span className={styles.heading}>{ctx.notification.heading}</span>
        {styles.relatedContent && (<a
          href="#"
          className={styles.relatedContent}
        >{ctx.notification.relatedContent}</a>)}

        {!ctx.notification.read && <div className={styles.unreadIndicator}></div>}
        <div className={styles.ago}>{ago} ago</div>
      </div>
      {ctx.notification.sentImageSrc && (
        <Image
          className={styles.sentImageSrc}
          src={ctx.notification.sentImageSrc}
          alt=""
        />
      )}
    </div>
  )
}
