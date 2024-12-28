'use client'

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound() {
  const [countdown, setCountdown] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    // Decrease the countdown every second
    const countdownTimer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(countdownTimer) // Clear the timer
        }
        return prevCount - 1
      })
    }, 1000)

    // Redirect after countdown ends
    const redirectTimer = setTimeout(() => {
      navigate('/') // Navigate to home page after countdown
    }, countdown * 1000)

    return () => {
      clearInterval(countdownTimer)
      clearTimeout(redirectTimer)
    }
  }, [navigate, countdown])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            404 - Page Not Found
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-2xl font-semibold">
            Redirecting to home in {countdown} seconds...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

