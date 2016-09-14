import bindActions from './bindActions'

export function mapStateToProps(state) {

  let { studentList, studentGenderType, enter } = state

  let { setStudentGenderType, getStudentList, setEnter } = bindActions

  const filterStudentList = (list, filter) => {

    list = list ? list : []

    switch (filter) {
      case '0':
        return list
      case '1':
        list = list.filter(item => {
          return item.gender === 'male'
        })
        return list
      case '2':
        list = list.filter(item => {
          return item.gender === 'female'
        })
        return list
      default:
        return list
    }
  }

  const toggleEnter = () => {
    setEnter(!enter);
  }

  return {
    getStudentList,
    studentAnimateInfo: {
      enter,
      toggleEnter
    },
    studentSearchInfo: {
      setStudentGenderType,
      studentGenderType
    },
    studentListInfo:  {
      studentList: filterStudentList(studentList,studentGenderType)
    }
  }
}
