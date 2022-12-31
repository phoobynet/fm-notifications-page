import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useNotifications } from '@/hooks/useNotifications'
import NotificationCards from '@/components/NotificationCards'

export default function Home () {
  const {
    markAllAsRead,
    markAllAsUnread,
    loading,
    notifications,
  } = useNotifications()

  if (loading) {
    return null
  }

  return (
    <>
      <Head>
        <title>Frontend Mentors | Notifications Page</title>
        <meta
          name="description"
          content="Frontend Mentors | Notifications Page"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/assets/images/favicon-32x32.png"
        />
      </Head>

      <div className={styles.home}>
        <NotificationCards
          notifications={notifications}
          markAllAsRead={markAllAsRead}
          markAllAsUnread={markAllAsUnread}
        />
      </div>
    </>
  )
}
