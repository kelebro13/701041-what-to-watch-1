import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.USER;

export const isAuthorizationRequiredSelector = (state) => state[NAME_SPACE].isAuthorizationRequired;

export const userSelector = (state) => state[NAME_SPACE].user;
