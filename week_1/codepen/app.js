const { Component, PropTypes } = React; // destructuring
const ReactDOM                 = ReactDOM; // not necessary - just clarifying

// some constants
const INITIAL_STATE = { multiplier: 1, bars: [] };
const ADD_DATA      = 'ADD_DATA';
const MINUS_DATA    = 'MINUS_DATA';
const ADD_BAR       = 'ADD_BAR';
const REMOVE_BAR    = 'REMOVE_BAR';

// helper function to create bars & get a color
const createBar = state => ({ id: state.bars.length, data: (state.bars.length + 1) * state.multiplier});
const getColor  = index => (index % 3 && 'cornflowerBlue') || (index % 2 ? 'gold':'tomato');

// our reducer function
const stateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                multiplier: state.multiplier + 1,
            };
        case MINUS_DATA:
            return {
                ...state,
                multiplier: state.multiplier - 1,
            };
        case ADD_BAR:
            return {
                ...state,
                bars: [...state.bars, createBar(state)],
            }
        case REMOVE_BAR:
            state.bars.length && state.bars.splice(0,1);
            return state;
        default:
            return state;
    }
}

// our component
class BarGraph extends Component {

    static propTypes = {
      dispatch: React.PropTypes.func,
      addData: React.PropTypes.func,
      minusData: React.PropTypes.func,
      addBar: React.PropTypes.func,
      removeBar: React.PropTypes.func,
    };

    state = stateReducer(undefined, {});

    // our version of dispatch
    dispatch(action) {
      this.setState(previousState => stateReducer(previousState, action));
    }
    addData = () => this.dispatch({type: ADD_DATA});

    minusData = () => this.dispatch({type: MINUS_DATA});

    addBar = () => this.dispatch({type: ADD_BAR});

    removeBar = () => this.dispatch({type: REMOVE_BAR, payload: (this.state.bars.length - 1)});

    renderBar(bar, index) {
      return (
        <div key={index} className={'bar'} style={{ backgroundColor: getColor(index), height: `${bar.data}%` }}/>
      );
    }

    render() {
        return (
            <div>
              <div className='controls'>
                <button onClick={this.addData}>Increase multiplier</button>
                <button onClick={this.minusData}>Decrease multiplier</button>
                <button onClick={this.addBar}>Add a bar</button>
                <button onClick={this.removeBar}>Remove a bar</button>
                <p>{this.state.multiplier}%</p>
              </div>

              <div className='graph'>
                {
                  this.state.bars.map(this.renderBar)
                }
              </div>
            </div>
        )
    }
}

ReactDOM.render(<BarGraph/>, document.querySelector('#app'));