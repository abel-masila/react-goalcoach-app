import { LOGGED_IN } from '../constants';

export function logUser(email){
  const action={
    type:LOGGED_IN,
    email
  }
  return action;
}
