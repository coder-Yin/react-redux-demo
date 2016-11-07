import bindActions from './bindActions'

export function mapStateToProps(state) {

  let { studentList, studentGenderType, isLoading } = state;

  let { setStudentGenderType, getStudentList, setEnter, addStudent } = bindActions;

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
      setStudentGenderType,
      studentGenderType
    },
    studentListInfo:  {
      isLoading,
      studentList: filterStudentList(studentList, studentGenderType)
    }
  }
}
