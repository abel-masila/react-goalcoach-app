import { LOGGED_IN } from '../constants';
import { SET_GOALS } from '../constants';
import { SET_COMPLETED }  from '../constants';
export function logUser(email){
  const action={
    type:LOGGED_IN,
    email
  }
  return action;
}
export function setGoals(goals){
  const action={
    type:SET_GOALS,
    goals
  }
  return action;
}
export function setCompleted(completeGoals){
  const action={
    type:SET_COMPLETED,
    completeGoals
  }
  return action;
}
