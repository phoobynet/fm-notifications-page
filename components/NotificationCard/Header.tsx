import { useContext, useMemo, useState } from 'react'
import { NotificationCardContext } from '@/components/NotificationCard/NotificationCardContext'
import { humanizedHowLongAgo } from '@/lib/dates/humanizedHowLongAgo'
import styles from './Header.module.scss'
import Image from 'next/image'
import { parseISO } from 'date-fns'

export default function Header () {
  const ctx = useContext(NotificationCardContext)
  const [fakeVisited, setFakeVisited] = useState<boolean>(false)

  const ago = useMemo<string>(() => {
    const t = ctx?.notification?.timestamp
    if (!t) {
      return ''
    }

    return humanizedHowLongAgo(parseISO(t))
  }, [ctx?.notification])

  const toggleVisitedState = () => {
    setFakeVisited(state => !state)
  }

  if (!ctx?.notification) { return null }

  return (
    <div className={styles.header}>
      <div>
        <span className={styles.username}>{ctx.notification.username}</span>
        <span className={styles.heading}>{ctx.notification.heading}</span>
        {styles.relatedContent && (<a
          href="#"
          onClick={toggleVisitedState}
          className={styles.relatedContent}
          data-fake-visited={fakeVisited}
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
