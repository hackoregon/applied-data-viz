import { createSelector } from 'reselect';
// import { propOr } from 'ramda';

export const appState = state =>  state.app;
export const routeState = state => state.routing;

export const appData = createSelector(
  appState,
  ({ data }) => data,
);

export const locationBeforeTransitions = createSelector(
  routeState,
  ({ locationBeforeTransitions }) => locationBeforeTransitions,
);

export const pathName = createSelector(
  locationBeforeTransitions,
  ({ pathname }) => pathname,
);

export const filerId = createSelector(
  pathName,
  p => p.split('/')[2],
)

export const campaignDetail = createSelector(
  appState,
  ({ campaign }) => campaign,
)