import { connect } from 'react-redux';
import { Component } from 'react';
import actions from 'actions';
import presenter from './presenter';
import { get } from 'lodash';

class List extends Component {
	componentWillMount() {
		this.props.loadUser(1);
	}

	render() {
		return presenter(this.props);
	}
}

function mapStateToProps(state) {
	return {
		user: get(state, 'users.data'),
	};
}

const mapDispatchToProps = {
	loadUser: actions.users.get,
};

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(List);
