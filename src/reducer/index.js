import {combineReducers} from 'redux';
import {reducer as user} from './user/user';
import {reducer as data} from './data/data';
import NameSpace from './name-spaces';

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: data
});
