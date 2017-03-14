import { btcApi } from '../../api';

// action types - constants
const INIT_APP                    = 'INIT_APP';
const FETCH_CAMPAIGN_DATA         = 'FETCH_CAMPAIGN_DATA';
const FETCH_CAMPAIGN_DATA_SUCCESS = 'FETCH_CAMPAIGN_DATA_SUCCESS';
const FETCH_CAMPAIGN_DATA_FAILURE = 'FETCH_CAMPAIGN_DATA_FAILURE';
const FETCH_SPENDING              = 'FETCH_SPENDING';
const FETCH_SPENDING_SUCCESS      = 'FETCH_SPENDING_SUCCESS';
const FETCH_SPENDING_FAILURE      = 'FETCH_SPENDING_FAILURE';
const FETCH_TRANSACTIONS          = 'FETCH_TRANSACTIONS';
const FETCH_TRANSACTIONS_SUCCESS  = 'FETCH_TRANSACTIONS_SUCCESS';
const FETCH_TRANSACTIONS_FAILURE  = 'FETCH_TRANSACTIONS_FAILURE';

export const INITIAL_STATE = { data: null, campaign: null,  isFetching: false, appInitialized: false };

export const initializeApp = () => ({ type: INIT_APP });

// btc actions
export const getCampaignData        = payload => ({ type: FETCH_CAMPAIGN_DATA, payload });
export const getCampaignDataSuccess = payload => ({ type: FETCH_CAMPAIGN_DATA_SUCCESS, payload });
export const getCampaignDataFailure = error   => ({ type: FETCH_CAMPAIGN_DATA_FAILURE, error });
export const getSpending            = payload => ({ type: FETCH_SPENDING, payload });
export const getSpendingSuccess     = payload => ({ type: FETCH_SPENDING_SUCCESS, payload });
export const getSpendingFailure     = error   => ({ type: FETCH_SPENDING_FAILURE, error });
export const getTransactions            = payload => ({ type: FETCH_TRANSACTIONS, payload });
export const getTransactionsSuccess     = payload => ({ type: FETCH_TRANSACTIONS_SUCCESS, payload });
export const getTransactionsFailure     = error   => ({ type: FETCH_TRANSACTIONS_FAILURE, error });

export const getCampaignDataThunk = (id) => dispatch => {
    dispatch(getCampaignData(id));
    return btcApi.fetchCampaignById(id).then(
      data => dispatch(getCampaignDataSuccess(data[0])),
      err => dispatch(getCampaignDataFailure(err)),
      );
}

export const getSpendingByIdThunk = (id) => dispatch => {
    dispatch(getSpending(id));
    return btcApi.fetchSpendingById(id).then(
      data => dispatch(getSpendingSuccess(data)),
      err => dispatch(getSpendingFailure(err)),
      );
}

export const getTransactionsByIdThunk = (id) => dispatch => {
    dispatch(getTransactions(id));
    return btcApi.fetchTransactionsById(id).then(
      data => dispatch(getTransactionsSuccess(data)),
      err => dispatch(getTransactionsFailure(err)),
      );
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_APP:
            return {
                ...state,
                appInitialized: true
            };
        case FETCH_CAMPAIGN_DATA:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_CAMPAIGN_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                campaign: action.payload
            };
        case FETCH_CAMPAIGN_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case FETCH_SPENDING:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SPENDING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                spendingData: action.payload
            };
        case FETCH_SPENDING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case FETCH_TRANSACTIONS:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                transactionData: action.payload
            };
        case FETCH_TRANSACTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;