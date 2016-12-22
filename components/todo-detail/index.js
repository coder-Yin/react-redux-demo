import React, { Component } from 'react';
import StudentSearch from '../student-search';
import StudentAdd from '../student-add';
import StudentList from '../student-list';
import isNeededChange from '../../js/shouldComponentUpdate.js'
import Loading from '../loading';

class TodoDetail extends Component {

    componentWillMount() {
      let { getStudentList } = this.props
      getStudentList();
    }

    shouldComponentUpdate(nextProps, nextState) {
      return isNeededChange(nextProps, nextState, this);
    }

    // componentDidMount() {
    //   console.log('TodoDetail ------- componentDidMount');
    // }
    //
    // componentWillUpdate() {
    //   console.log('TodoDetail ------- componentWillUpdate');
    // }
    //
    // componentDidUpdate() {
    //   console.log('TodoDetail ------- componentDidUpdate');
    // }

    render() {
      console.log('TodoDetail render');
      let { studentListInfo, studentSearchInfo, studentAddInfo, isLoading} = this.props;
      return (
        <div>
        {
          isLoading ?
          <Loading /> :
          <div>
            <StudentSearch {...studentSearchInfo} />
            <StudentAdd {...studentAddInfo} />
            <StudentList {...studentListInfo} />
          </div>
        }
        </div>
      )
    }
}

export default TodoDetail
