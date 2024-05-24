import { FC, useState } from 'react'
import './CourseTags.scss'

interface ICourseTags {
	tags: string[]
	handleTagClick: (tag: string) => void
}

const CourseTags: FC<ICourseTags> = ({ tags, handleTagClick }) => {
	const [selectedTag, setSelectedTag] = useState<string>('')

	const handleTag = (tag: string) => {
		setSelectedTag(tag)
		handleTagClick(tag)
	}

	return (
		<aside className='courseTags'>
			<h2
				className={`${
					selectedTag === '' ? 'courseTagsItem--active' : ' courseTagsItem'
				}`}
				onClick={() => handleTag('')}
			>
				Все
			</h2>
			{tags.map(tag => (
				<div
					className={`${
						selectedTag === tag ? 'courseTagsItem--active' : ' courseTagsItem'
					}`}
					onClick={() => handleTag(tag)}
					key={tag}
				>
					{tag}
				</div>
			))}
		</aside>
	)
}

export default CourseTags
