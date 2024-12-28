import React, { useState, useEffect } from "react"
import { ToastContainer } from 'react-toastify';

export default function Header() {
	const [currentTime, setCurrentTime] = useState(new Date())
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<header className="flex items-center justify-between p-4 border-b">
			<div className="flex items-center gap-2">
				<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
					<span className="text-primary font-semibold">sR</span>
				</div>
				<span className="text-xl font-medium">sync Room</span>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div className="flex items-center gap-4">
				<span className="text-sm text-muted-foreground hidden sm:inline">
					{currentTime.toLocaleTimeString()} • {currentTime.toLocaleDateString()}
				</span>
			</div>
		</header>
	)
}