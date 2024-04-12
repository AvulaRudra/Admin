import React from 'react'
import AddCourseForm from './components/AddCourseForm'
import CourseList from './components/CoursesList'
import AdminDashboard from './components/AdminDashboard'

const App = () => {
  return (
    <div>
      <AdminDashboard/>
      <AddCourseForm/>
      <CourseList/>
    </div>
  )
}

export default App