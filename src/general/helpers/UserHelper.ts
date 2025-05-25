import moment from 'moment';
import PreferenceKeys from '../constants/PreferenceKeys';

const UserHelper = {
  
  // Check access token valid
  checkAccessTokenValid: () => {
    const accessToken = localStorage.getItem(PreferenceKeys.accessToken);
    const accessTokenExpired = localStorage.getItem(
      PreferenceKeys.accessTokenExpired
    );

    if (accessToken && accessTokenExpired) {
      const momentExpired = moment.utc(accessTokenExpired);
      const momentNow = moment.utc();
      return momentExpired.isAfter(momentNow);
    }

    return null;
  },


  // Sign out
  signOut: () => {
    localStorage.removeItem(PreferenceKeys.accessToken);
    localStorage.removeItem(PreferenceKeys.accessTokenExpired);

    // removeAxiosAccessTokenQLBH();
    // removeAxiosAccessToken();
  },

};

export default UserHelper;
