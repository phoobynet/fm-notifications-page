import { useContext } from 'react'
import Image from 'next/image'
import { NotificationCardContext } from '@/components/NotificationCard/NotificationCardContext'
import styles from './Avatar.module.scss'

export default function Avatar () {
  const ctx = useContext(NotificationCardContext)

  if (!ctx?.notification) { return null }

  return (
    <Image
      src={ctx?.notification.avatarSrc}
      alt=""
      className={styles.avatar}
    />
  )
}
