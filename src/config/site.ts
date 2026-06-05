/** Site config — edit URLs and contact details here */

export const BRAND_NAME = 'brAInify'

export const BRAND_TITLE = 'Harvard for the AI generation'

export const APP_STORE_URL = 'https://apps.apple.com/ca/app/brainify-app/id6759913473'

export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.brainify.app'

export const LOGIN_URL = 'https://app.brainify.world'

export const APP_URL = LOGIN_URL

export function getPathUrl(pathId: string) {
  return `${APP_URL}/paths/${pathId}`
}

export const START_LEARNING_URL = APP_URL

export const EXPLORE_PATHS_URL = '#paths'

export const EMAIL = 'hello@brainify.com'
