import React, {Component} from 'react';
import './index.scss?p6';

import isNeededChange from '../../js/shouldComponentUpdate.js'

export default class StudentList extends Component{

    shouldComponentUpdate(nextProps, nextState) {
      return isNeededChange(nextProps, nextState, this);
    }

    render(){
        console.log('StudentList render');
    	  let {studentList} = this.props;
        return(
              <div className="container">
                <table className="table">
      			      <caption>学生列表</caption>
      			      <thead>
      			        <tr>
      			          <th>#</th>
      			          <th>学号</th>
      			          <th>姓名</th>
      			          <th>性别</th>
      			        </tr>
      			      </thead>
      			      <tbody>
      			      	{
          	 			 		studentList.map((item, index) => {
          	 			 			return  <tr key={index}>
          							          <th scope="row">{index+1}</th>
          							          <td>{item.get('stuNo')}</td>
          							          <td>{item.get('stuName')}</td>
          							          <td>{item.get('gender')}</td>
          							        </tr>
          	 			 		})
          				 	}
      			      </tbody>
      			    </table>
                <span className="icon"></span>
              </div>
	    )
    }
}


// <tbody>
//   {
//     studentList.map((item, index) => {
//       return  <tr key={index}>
//                 <th scope="row">{index+1}</th>
//                 <td>{item.stuNo}</td>
//                 <td>{item.stuName}</td>
//                 <td>{item.gender}</td>
//                 <td><a href="javascript: void(0);">update</a></td>
//               </tr>
//     })
//   }
// </tbody>
