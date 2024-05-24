import { FC } from 'react'
import CourseListItem from '../CourseListItem/CourseListItem'
import { ICourses } from '../../types/courses'
import './CourseList.scss'

const CourseList: FC<{ courses: ICourses[] }> = ({ courses }) => {
	return (
		<section className='courseList'>
			{courses.map(course => (
				<CourseListItem course={course} key={course.id} />
			))}
		</section>
	)
}

export default CourseList
