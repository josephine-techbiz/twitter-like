import {defaultUser} from '@/services/functions'

export default {
  me: defaultUser(),
  isTweetPopupActive: false,
  isLoggedIn: true,
  globalIsLoading: false,
  activeNotifications: [],
  editProfilePopup: false,
  profileTweetCount: 0,
  lightbox: {
    state: false,
    images: [] 
  },
  isMobileMenuActive: false
}