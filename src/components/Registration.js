import {Component} from 'react';
import {WINTRGARDEN_REGISTRATION} from '../data/externalLinks';
import {internalRegistration} from '../data/strings';

class Registration extends Component {

  static openRegistrationInNewTab(){

    var online = navigator.onLine;

    if (online) {

      window.open(WINTRGARDEN_REGISTRATION, '_blank');

    } else {

     window.open('/offlineRegistration', '_blank');

    }

  }


}
  export default Registration
