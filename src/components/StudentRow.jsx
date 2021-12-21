import React from 'react'
import StudentData from './StudentData'

function StudentRow({ studentsAll, onDelete }) {
    return (
        <>
        {studentsAll.map(student => 
        <StudentData
        key={student.studentId}
        studentObj={student}
        onDelete={onDelete}
        /> 
        )}
        </>
    )
}

export default StudentRow
