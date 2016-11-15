import React, {Component} from 'react';
import Loading from '../loading';
import './index.scss?p6';

export default class StudentList extends Component{

    render(){
    	  let {studentList, isLoading} = this.props;
        return(
    		 	<div>
            {
              isLoading ? <Loading /> :
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
          							          <td>{item.stuNo}</td>
          							          <td>{item.stuName}</td>
          							          <td>{item.gender}</td>
          							        </tr>
          	 			 		})
          				 	}
      			      </tbody>
      			    </table>
              </div>
            }
        		</div>
	    )

	   return null;
    }
}
