const React = require('react');

const Something = props => <h1>{props.thing}</h1>;

Something.displayName = 'Something';
Something.propTypes = {
  thing: React.PropTypes.string.isRequired,
};

export default Something;
