import Head from 'next/head'
import NotificationCard from '@/components/NotificationCard'
import styles from '@/styles/Home.module.scss'
import { useNotifications } from '@/hooks/useNotifications'
import NotificationsHeader from '@/components/NotificationsHeader'

export default function Home () {
  const {
    loading,
    notifications,
  } = useNotifications()

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
        {loading && <div>Loading...</div>}
        <NotificationsHeader
          notifications={notifications}
          markAllAsRead={() => {console.log('TODO')}}
        />

        <main>
          {!loading &&
            notifications
              .map((notification, index) => (<NotificationCard
                notification={notification}
                key={index}
              />))
          }
        </main>
      </div>
    </>
  )
}
