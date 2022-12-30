import { StaticImageData } from 'next/image'

export interface Notification {
  username: string
  avatarSrc: StaticImageData
  timestamp: Date
  heading: string
  relatedContent: string
  read: boolean
  message?: string
  sentImageSrc?: StaticImageData
}
