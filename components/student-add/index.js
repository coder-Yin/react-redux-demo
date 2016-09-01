import React, {Component} from 'react';
export default class StudentAdd extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
		 	<div className="container">
			 	 <form className="form-horizontal">
				  <div className="form-group">
				    <label for="inputEmail3" className="col-sm-2 control-label">学号：</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="stuNo" placeholder="请输入学生学号" />
				    </div>
				  </div>
				  <div className="form-group">
				    <label for="inputPassword3" className="col-sm-2 control-label">姓名：</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="stuName" placeholder="请输入学生姓名" />
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" className="btn btn-primary">添 加</button>
				    </div>
				  </div>
				</form>
    		</div>
	    )

    }
}
