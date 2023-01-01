import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import NotificationCards from '@/components/NotificationCards'
import { GetServerSideProps } from 'next'
import { useNotificationStore } from '@/stores/useNotificationStore'
import { Notification } from '@/types/Notification'
import { useEffect } from 'react'
import { getFakeNotifications } from '@/data/fakeNotifications'

interface Props {
  initialNotifications?: Notification[]
}

export default function Home ({ initialNotifications }: Props) {
  const setNotifications = useNotificationStore(state => state.setNotifications)
  const fetch = useNotificationStore(state => state.fetch)
  const fetching = useNotificationStore(state => state.fetching)

  useEffect(() => {
    if (initialNotifications?.length) {
      setNotifications(initialNotifications)
    } else {
      (async () => {
        await fetch()
      })()
    }
  }, [])

  if (fetching) {
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
        <NotificationCards />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const notifications = getFakeNotifications()
  console.log('Hello, Server-side!')

  return {
    props: {
      initialNotifications: notifications,
    },
  }
}
