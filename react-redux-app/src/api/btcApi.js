import { promiseToFetch } from './utils';

const BTC_API_ROOT = 'http://54.213.83.132/hackoregon/http/';

export const fetchCampaignById = filerId => {
    const url = `${BTC_API_ROOT}committee_data_by_id/${filerId}/`;
    return promiseToFetch(url);
};

export const fetchTransactionsById = filerId => {
    const url = `${BTC_API_ROOT}current_candidate_transactions_in/${filerId}/`
    return promiseToFetch(url);
}

export const fetchSpendingById = (filerId) => {
    const url = `${BTC_API_ROOT}current_candidate_transactions_out/${filerId}/`
    return promiseToFetch(url);
}
