import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp, getSpendingByIdThunk, getCampaignDataThunk, campaignDetail, appData, filerId } from '../../state';

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.getSpending(this.props.params.filerId);
  }

  componentDidMount() {
    this.props.initApp();
  }

  fetchData = () => this.props.getSpending(this.props.params.filerId);

  fetchCampaignDetail = () => this.props.getCampaignDetail(this.props.params.filerId);

  renderData = (data) => data.map(datum => <p key={datum.tran_id}>{datum.contributor_payee} recieved {datum.amount}</p>);

  renderDetails = (data) => {
    return (
      <div>
        <h3>Details for {data.candidate_name}</h3>
        <h4>Committee: {data.committee_name}</h4>
      </div>
    );
  }

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
        {this.props.data && this.renderData(this.props.data)}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    inFlight: state.app.isFetching,
    data: appData(state),
    detail: campaignDetail(state),
    filerId: filerId(state),
  }),
  dispatch => ({
  initApp: () => dispatch(initializeApp()),
  getSpending: (filerId) => dispatch(getSpendingByIdThunk(filerId)),
  getCampaignDetail: (filerId) => dispatch(getCampaignDataThunk(filerId))
})
)(App);
