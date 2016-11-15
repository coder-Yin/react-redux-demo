import React, { Component } from 'react';
import StudentSearch from '../student-search';
import StudentAdd from '../student-add';
import StudentList from '../student-list';
// import StudentAnimate from '../student-animate';

class TodoDetail extends Component {

    componentWillMount() {
      let { getStudentList } = this.props
      getStudentList();
    }

    render() {
      let { studentListInfo, studentSearchInfo, studentAddInfo } = this.props;
      return (
        <div>
          <StudentSearch {...studentSearchInfo} />
          <StudentAdd {...studentAddInfo} />
          <StudentList {...studentListInfo} />
        </div>
      )
    }
}

export default TodoDetail
