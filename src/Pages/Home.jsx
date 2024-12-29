import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Video } from 'lucide-react'
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
	const navigate = useNavigate();
	const [inputRoomId, setInputRoomId] = useState("");
	const handleCreateRoom = () => {
		const roomId = uuidv4();
		navigate(`/meeting/${roomId}`);
	};
	const handleJoinRoom = () => {
		if (inputRoomId.trim() === "") {
			toast.error('🥹 Please enter a valid room ID!', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}
		navigate(`/meeting/${inputRoomId}`); // Navigate to the meeting page with the input room ID
	};

	return (
		<div className="min-h-screen bg-background flex flex-col">
			<Header/>
			<main className="flex-grow flex items-center justify-center px-4 py-8">
				<div className="max-w-3xl w-full space-y-8 text-center">
					<div className="space-y-4">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
							Stay Connected, Work Together
						</h1>
						<p className="text-xl text-muted-foreground">
							😎 Powerful video conferencing designed to keep your team in sync.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="gap-2" onClick={handleCreateRoom}>
							<Video className="w-5 h-5" />
							Start Meeting
						</Button>
						<div className="flex gap-2 sm:w-auto w-full">
							<Input value={inputRoomId} onChange={(e) => setInputRoomId(e.target.value)} placeholder="Enter meeting code" className="flex-grow sm:w-64" />
							<Button variant="outline" onClick={handleJoinRoom}>Join</Button>
						</div>
					</div>
					<p className="text-sm text-muted-foreground">
						<a href="https://github.com/cybertiwari/syncRoom" className="text-primary hover:underline">
							Learn more
						</a>{" "}
						about syncRoom
					</p>
				</div>
			</main>
			<Footer/>
		</div>
	)
}