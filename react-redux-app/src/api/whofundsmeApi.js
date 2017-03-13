import { promiseToFetch } from './utils';

const WHOFUNDSME_API_ROOT = 'http://159.203.80.123:3000/api';
// http://159.203.80.123:3000/api/legislators?state=OR
export const fetchLegislatorsByState = usState => {
    const url = `${WHOFUNDSME_API_ROOT}/legislators?state=${usState}`;
    return promiseToFetch(url);
};
// http://159.203.80.123:3000/api/legislators?crp_id=N00033474
export const fetchLegislatorByCrpId = crpId => {
    const url = `${WHOFUNDSME_API_ROOT}/legislators?crp_id=${crpId}`
    return promiseToFetch(url);
}
