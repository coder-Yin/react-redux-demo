import React, {Component} from 'react';
export default class StudentSearch extends Component{
    
    handleSelect(event) {
        let {setStudentGenderType} = this.props;
        setStudentGenderType(event.target.value);
    }

    render(){
        return(
		 	          <div className="container text-center">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="col-sm-2 control-label">性别：</label>
                        <div className="col-sm-3">
                          <select className="form-control" onChange = {this.handleSelect.bind(this)}>
                              <option value="0">不限</option>
                              <option value="1">男</option>
                              <option value="2">女</option>
                            </select>
                        </div>
                      </div>
                    </form>
                </div>
	            )
    }
}
