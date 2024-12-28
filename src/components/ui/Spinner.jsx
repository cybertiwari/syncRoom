import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({ size = 'md' }) => {
	const sizeClasses = {
		sm: 'w-16 h-16',
		md: 'w-24 h-24',
		lg: 'w-32 h-32'
	}

	return (
		<div className="relative flex items-center justify-center h-screen">
			<div className={`${sizeClasses[size]} rounded-full animate-spin border-t-4 border-b-4 border-primary`}></div>
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-primary font-semibold text-xl">sR</span>
			</div>
		</div>
	)
}

Spinner.propTypes = {
	size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

export default Spinner
