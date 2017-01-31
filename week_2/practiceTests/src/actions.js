export const FIRED = 'MYAPP/FIRED';
export const SUCCESS = 'MYAPP/SUCCESS';

// action creators
export const fired = payload => ({ type: FIRED, payload });
export const success = payload => ({ type: SUCCESS, payload });
