const FIRED = 'MYAPP/FIRED';

// action creator
const fired = payload => ({ type: FIRED, payload });

module.exports = {
  fired,
  FIRED,
};
