import React, {Component} from 'react';
export default class StudentList extends Component{

    render(){
    	  let {studentList} = this.props;
        return(
    		 	<div className="container">
            {
              studentList.length > 0 ?
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
    			    </table> : null
            }
        		</div>
	    )

	   return null;
    }
}
