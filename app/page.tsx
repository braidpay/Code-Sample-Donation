"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import DonateDialog from "./DonateDialog"
import ReadMoreDialog from "./ReadMoreDialog"


interface DonationStats {
  totalDonationAmount: number
  totalDonationCount: number
}

export default function LAFirePage() {
  const images = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/LAFire/images/fire${i + 1}.jpg`,
    alt: "LA Fire Emergency Response Image"
  }))

  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const [isLoading, setIsLoading] = useState(true)
  const [donationStats, setDonationStats] = useState<DonationStats>({
    totalDonationAmount: 0,
    totalDonationCount: 0
  })

  useEffect(() => {
    setMounted(true)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const fetchDonationStats = async () => {
      try {
        const response = await fetch('/api/donations')
        const data = await response.json()
        setDonationStats(data)
      } catch (error) {
        console.error('Error fetching donation stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDonationStats()
  }, [])

  const handleShare = () => {
    const text = encodeURIComponent(
      "I just donated to Los Angeles Wildfires, Emergency Response Fundraiser by @BraidPay \n\nYou can join via:\nhttps://impact.braidpay.com/lafire"
    )
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setIsAnimating(false)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsAnimating(true)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setIsAnimating(false)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className={`flex flex-col min-h-screen gradient-background text-white overflow-hidden 
      ${!mounted ? 'opacity-0' : 'opacity-100'}`}>
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section 
          className={`flex-1 flex flex-col items-center justify-center text-center pt-4 px-4 min-h-[40vh] 
            transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="space-y-8">
            <h1 className={`text-4xl md:text-6xl font-bold transform transition-all duration-1000 delay-300 
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Los Angeles Wildfires
              <span className={`block text-yellow-300 mt-2 transform transition-all duration-1000 delay-500
                ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Emergency Response Fundraiser
              </span>
            </h1>
            <div className="flex flex-col gap-4 items-center w-full px-4">
              <div className="w-fit">
                <DonateDialog />
              </div>
              <div className="w-fit">
                <Button
                  onClick={handleShare}
                  size="lg"
                  className="bg-black hover:bg-black/90 text-white text-xl px-8 py-6 rounded-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 mr-2 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Share on X
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`w-full px-4 py-8 transition-all duration-1000 delay-700
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-sm text-yellow-300">Fire Fighters</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">12,300+</div>
              <div className="text-sm text-yellow-300">Structures Damaged, Destroyed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">38,629</div>
              <div className="text-sm text-yellow-300">Area (Acres)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">179,000</div>
              <div className="text-sm text-yellow-300">Evacuations (Residents)</div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto flex justify-center gap-4 mt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center flex-1 max-w-2xl">
              <div className="text-3xl font-bold mb-2">
                {isLoading ? "Loading..." : `$ ${donationStats.totalDonationAmount}`}
              </div>
              <div className="text-sm text-yellow-300">Total Donations Amount</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center flex-1 max-w-2xl">
              <div className="text-3xl font-bold mb-2">
                {isLoading ? "Loading..." : donationStats.totalDonationCount}
              </div>
              <div className="text-sm text-yellow-300">Total Donation Count</div>
            </div>
          </div>
         
        </section>

        {/* Image Scroll Section */}
        <section className={`bg-black/20 py-12 backdrop-blur-sm overflow-hidden relative
          transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            ref={scrollContainerRef}
            className="flex animate-scroll cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* First set of images */}
            {images.map((image, index) => (
              <div key={`first-${index}`} className="flex-none w-[300px] h-[200px] relative mx-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="300px"
                />
              </div>
            ))}
            {/* Duplicate set of images for seamless loop */}
            {images.map((image, index) => (
              <div key={`second-${index}`} className="flex-none w-[300px] h-[200px] relative mx-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="300px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className={`max-w-3xl mx-auto px-4 py-12 text-center transition-all duration-1000 delay-700
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              The Los Angeles wildfires have devastated communities, destroying homes and displacing thousands of residents. Your support is crucial in providing immediate relief and assistance to those affected by this natural disaster.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Every donation, no matter the size, helps provide emergency shelter, food, water, and essential supplies to families in need. Join us in making a difference in the lives of those impacted by these devastating wildfires.
            </p>
            <ReadMoreDialog />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`text-center py-4 bg-black/20 backdrop-blur-sm mt-auto
        transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-sm font-light">
          With Love from{" "}
          <a 
            href="https://braidpay.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold hover:text-yellow-300 transition-colors"
          >
            BraidPay
          </a>
        </p>
      </footer>

     
    </div>
  )
}
