import styles from './NotificationCard.module.scss'
import Image from 'next/image'
import { differenceInMilliseconds } from 'date-fns'
import { useMemo } from 'react'
import { Notification } from '@/types/Notification'
import { durationHumanizer } from '@/lib/dates/durationHumanizer'

interface Props {
  notification: Notification
}

export default function NotificationCard ({ notification }: Props) {
  const ago = useMemo<string>(() => {
    if (!notification) {
      return ''
    }

    // humanize duration and tidy up weirdly inconsistent output in the design
    return durationHumanizer(differenceInMilliseconds(new Date(), notification.timestamp), {
      units: ['y', 'mo', 'w', 'd', 'h', 'm'],
      largest: 1,
      round: true,
    }).replace(' m', 'm')
  }, [notification])

  if (!notification) {
    return null
  }

  return (
    <div
      className={styles.notification}
      data-read={notification.read}
    >
      <Image
        src={notification.avatarSrc}
        alt=""
        className={styles.avatar}
      />
      <div className={styles.header}>
        <span className={styles.username}>{notification.username}</span>
        <span className={styles.heading}>{notification.heading}</span>
        {styles.relatedContent && (<a
          href="#"
          className={styles.relatedContent}
        >{notification.relatedContent}</a>)}
      </div>
      <div className={styles.main}>
        <div className={styles.message}>{notification.message}</div>
        {notification.sentImageSrc && (<Image
          className={styles.sentImageSrc}
          src={notification.sentImageSrc}
          alt=""
        />)}
      </div>
      <div className={styles.footer}>
        <div className={styles.ago}>{ago} ago</div>
      </div>
    </div>
  )
}
