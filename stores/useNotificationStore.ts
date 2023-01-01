import create from 'zustand'
import { Notification } from '@/types/Notification'
import axios from 'axios'

export interface NotificationStoreState {
  notifications: Notification[]
  setNotifications: (notifications: Notification[]) => void,
  unread: () => number
  fetch: () => Promise<void>
  fetching: boolean
  markAllAsRead: () => Promise<void>
  markAllAsUnread: () => Promise<void>
}

export const useNotificationStore = create<NotificationStoreState>((set, get) => ({
  notifications: [],
  setNotifications (notifications: Notification[]): void {
    set({
      notifications,
    })
  },
  unread (): number {
    return get().notifications.filter(n => !n.read).length
  },
  async fetch (): Promise<void> {
    try {
      set({
        fetching: true,
      })
      const notifications = await axios.get<Notification[]>('/api/notifications').then(r => r.data)
      set({ notifications })
    } finally {
      set({
        fetching: false,
      })
    }
  },
  fetching: false,
  async markAllAsRead (): Promise<void> {
    set({
      notifications: get().notifications.map(n => ({
        ...n,
        read: true,
      })),
    })
  },
  async markAllAsUnread (): Promise<void> {
    set({
      notifications: get().notifications.map(n => ({
        ...n,
        read: false,
      })),
    })
  },
}))
