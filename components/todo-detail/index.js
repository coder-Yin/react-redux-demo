import React, {Component} from 'react';
import StudentSearch from '../student-search';
import StudentAdd from '../student-add';
import StudentList from '../student-list';

class TodoDetail extends Component{
    
    componentWillMount() {
        let {getStudentList} = this.props;
        getStudentList();
    }

    render(){
        let {studentListInfo, studentSearchInfo} = this.props;
        return (
            <div>
                <StudentSearch {...studentSearchInfo} />
                <StudentList {...studentListInfo} /> 
            </div>
        );
    }
}

export default TodoDetail;