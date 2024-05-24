import { FC } from 'react'
import { ICourses } from '../../types/courses'
import './CourseListItem.scss'
const CourseListItem: FC<{ course: ICourses }> = ({ course }) => {
	return (
		<div className='courseListItem__card card'>
			<div
				className='card__image'
				style={{ backgroundColor: `${course.bgColor}` }}
			>
				<img src={course?.image} alt='Картинка о курсе' />
			</div>
			<h2 className='card__title'>{course?.name}</h2>
		</div>
	)
}

export default CourseListItem
