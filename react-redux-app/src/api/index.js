import {fetchLegislatorsByState, fetchLegislatorByCrpId} from './whofundsmeApi';
import {fetchCampaignById, fetchTransactionsById, fetchSpendingById} from './btcApi';

export const whofundsmeApi = {
    fetchLegislatorsByState,
    fetchLegislatorByCrpId
}

export const btcApi = {
    fetchCampaignById,
    fetchTransactionsById,
    fetchSpendingById
}