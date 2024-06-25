/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import AppPro from './vendor/bundle/ruby/2.6.0/AppPro';
//import Projectt from './Projectt';
//import Projectt from './vendor/bundle/Projectt';
//import PasswordeGenarator from './vendor/bundle/PasswordeGenarator';
import CurrencyProject from './src/CurrencyProject';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CurrencyProject);
