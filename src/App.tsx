import { FC, useEffect, useState } from 'react'
import './styles/index.scss'
import CourseList from './components/CourseList/CourseList'
import { ICourses } from './types/courses'
import './styles/index.scss'
import CourseTags from './components/CourseTags/CourseTags'

const App: FC = () => {
	const [courses, setCourses] = useState<ICourses[]>([])
	const [tags, setTags] = useState<string[]>([])
	const getCourses = async (): Promise<void> => {
		try {
			const response = await fetch('https://logiclike.com/docs/courses.json')
			const data: ICourses[] = await response.json()
			setCourses(data)
			setFilteredCourses(data)
			const uniqueTags = [...new Set(data.flatMap(course => course.tags))]
			setTags(uniqueTags)
		} catch (error) {
			console.error('Ошибка при получении данных', error)
		}
	}

	useEffect(() => {
		getCourses()
	}, [])

	//filter
	const [filteredCourses, setFilteredCourses] = useState<ICourses[]>([])
	const handleTagClick = (tag: string) => {
		if (tag === '') {
			setFilteredCourses(courses)
		} else {
			const filteredCourses = courses.filter(course =>
				course.tags.includes(tag)
			)
			setFilteredCourses(filteredCourses)
		}
	}
	return (
		<div className='App'>
			<CourseTags tags={tags} handleTagClick={handleTagClick} />
			<CourseList courses={filteredCourses} />
		</div>
	)
}

export default App
