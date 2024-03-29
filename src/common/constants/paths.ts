export const paths = {
  PACK_LIST: '/',
  PACK: 'pack/:packId',
  LEARN_PACK: 'pack/learn/:packId/',
  USER_PROFILE: '/user-profile',
  AUTH: 'auth',
  LOGIN: '/auth/login',
  REGISTRATION: '/auth/registration',
  SET_NEW_PASSWORD: '/auth/set-new-password/:token',
  FORGOT_PASSWORD: '/auth/forgot-password',
  CHECK_EMAIL: '/auth/check-email',
} as const
