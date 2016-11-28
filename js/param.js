import bindActions from './bindActions'

export function mapStateToProps(state) {

  let { studentList, studentGenderType, isLoading } = state;

  let { setStudentGenderType, getStudentList, setEnter, addStudent } = bindActions;

  /**
   * [filterStudentList 根据学生性别筛选列表数据]
   * @param  {[Array]} list   [所有的学生列表数据]
   * @param  {[String]} filter [学生性别]
   * @return {[Array]}        [筛选后的数据]
   */
  const filterStudentList = (list, filter) => {

    list = list ? list : [];

    switch (filter) {
      case '1':
        list = list.filter(item => {
          return item.gender === 'male'
        });
        break;
      case '2':
        list = list.filter(item => {
          return item.gender === 'female'
        });
        break;
    }

    return list;
  }

  return {
    getStudentList,
    studentAddInfo: {
      addStudent
    },
    studentSearchInfo: {
      setStudentGenderType
    },
    studentListInfo:  {
      isLoading,
      studentList: filterStudentList(studentList, studentGenderType)
    }
  }
}
