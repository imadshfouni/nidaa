/** Production web app — login & primary CTAs */
export const APP_URL = 'https://app.brainify.world'

export const APP_STORE_URL =
  'https://apps.apple.com/lb/app/brainify-app/id6759913473'

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.brainify.app'

/** Official app icon (App Store / Play Store) */
export const LOGO_SRC = '/brainify-logo.png'

/**
 * Normalize a Google Drive share link for opening the video in a new tab.
 * Paste the link from Drive → Share → Copy link.
 */
export function googleDriveVideoUrl(shareOrViewUrl: string): string {
  const trimmed = shareOrViewUrl.trim()
  if (!trimmed) return ''

  const idMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (idMatch) {
    return `https://drive.google.com/file/d/${idMatch[1]}/view`
  }

  return trimmed
}
