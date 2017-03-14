import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp, getSpendingByIdThunk, getTransactionsByIdThunk, getCampaignDataThunk, campaignDetail, campaignTransactions, campaignSpending, filerId } from '../../state';

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.getSpending(this.props.params.filerId);
    this.props.getTransactions(this.props.params.filerId);
  }

  componentDidMount() {
    this.props.initApp();
  }

  fetchData = () => this.props.getSpending(this.props.params.filerId);

  fetchCampaignDetail = () => this.props.getCampaignDetail(this.props.params.filerId);

  renderData = (data) => data.map(datum => <p key={datum.tran_id}>{datum.contributor_payee} recieved {datum.amount}</p>).slice(0, 10);

  renderTransactions = () => (
    <div>
      <h4>Transactions</h4>
      {this.renderData(this.props.transactionData)}
    </div>
  );

  renderSpending = () => (
    <div>
      <h4>Spending</h4>
      {this.renderData(this.props.spendingData)}
    </div>
  );

  renderDetails = (data) => (
        <div>
          <h3>Details for {data.candidate_name}</h3>
          <h4>Committee: {data.committee_name}</h4>
        </div>
  );

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React-redux data viz</h2>
        </div>
        {this.props.inFlight && <h4>Loading...</h4>}
        <p className="App-intro">
          Showing data for filer id: {this.props.filerId}
        </p>
        {this.props.detail && this.renderDetails(this.props.detail)}
        <button onClick={this.fetchCampaignDetail}>Get campaign detail</button>
        <button onClick={this.fetchData}>Refresh data</button>

        {this.props.spendingData && this.renderSpending()}
        {this.props.transactionData && this.renderTransactions()}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    inFlight: state.app.isFetching,
    spendingData: campaignSpending(state),
    transactionData: campaignTransactions(state),
    detail: campaignDetail(state),
    filerId: filerId(state),
  }),
  dispatch => ({
  initApp: () => dispatch(initializeApp()),
  getSpending: (filerId) => dispatch(getSpendingByIdThunk(filerId)),
  getTransactions: (filerId) => dispatch(getTransactionsByIdThunk(filerId)),
  getCampaignDetail: (filerId) => dispatch(getCampaignDataThunk(filerId))
})
)(App);
