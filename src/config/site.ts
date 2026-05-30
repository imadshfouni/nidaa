/** Production web app — login & primary CTAs */
export const APP_URL = 'https://app.brainify.world'

export const APP_STORE_URL =
  'https://apps.apple.com/lb/app/brainify-app/id6759913473'

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.brainify.app'

/** Official app icon (App Store / Play Store) */
export const LOGO_SRC = '/brainify-logo.png'

/** Extract file id from a Google Drive share or view URL. */
export function googleDriveFileId(shareOrViewUrl: string): string | null {
  const trimmed = shareOrViewUrl.trim()
  if (!trimmed) return null

  const idMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/)
  return idMatch?.[1] ?? null
}

/** Open the file on Google Drive in a new tab (fallback). */
export function googleDriveVideoUrl(shareOrViewUrl: string): string {
  const id = googleDriveFileId(shareOrViewUrl)
  if (id) return `https://drive.google.com/file/d/${id}/view`
  return shareOrViewUrl.trim()
}

/** Embed URL for in-page playback (iframe). File must be shared: anyone with the link. */
export function googleDriveEmbedUrl(shareOrViewUrl: string): string {
  const id = googleDriveFileId(shareOrViewUrl)
  if (!id) return ''
  return `https://drive.google.com/file/d/${id}/preview`
}
