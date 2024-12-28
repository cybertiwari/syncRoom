import { Github, Twitter, Linkedin, Globe } from 'lucide-react'
import React  from "react"

export default function Footer() {
	return (
		<footer className="mt-auto border-t">
			<div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
				<p className="text-sm text-muted-foreground">
					© {new Date().getFullYear()} sync Room. All rights reserved.
				</p>
				<div className="flex gap-4">
					<a href="https://github.com/cybertiwari" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
						<Github className="w-5 h-5" />
					</a>
					<a href="https://x.com/cybertiwari" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
						<Twitter className="w-5 h-5" />
					</a>
					<a href="https://linkedin.com/in/cybertiwari" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
						<Linkedin className="w-5 h-5" />
					</a>
					<a href="https://suniltiwari.dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
						<Globe className="w-5 h-5" />
					</a>
				</div>
			</div>
		</footer>
	)
}