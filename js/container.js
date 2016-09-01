import React, {Component} from 'react';
import TodoDetail from '../components/todo-detail';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './param';

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TodoDetail {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
