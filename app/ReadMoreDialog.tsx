"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReadMoreDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-white text-red-600 border-red-600 hover:bg-red-600 hover:text-white mt-8
            hover:shadow-lg transition-all duration-300 text-lg"
        >
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[75rem] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-6">
            About This Initiative
          </DialogTitle>
        </DialogHeader>
        
        {/* Mission Statement */}
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed text-lg">
            We're on a mission to showcase how stablecoins like USDC can revolutionize charitable giving by delivering transparency, speed, and cost-effectiveness. In light of the recent wildfires in Los Angeles, we aim to demonstrate how our platform can efficiently connect donors to organizations on the front lines of emergency response.
          </p>
          
          <p className="leading-relaxed text-lg">
            Donors can easily track their contributions from collection to final distribution in real-time, ensuring full visibility into where their funds go. For organizations that do not accept USDC stablecoin, BraidPay seamlessly off-ramps donations into fiat currency and transfers funds directly from our bank account to the charity.
          </p>

          {/* Organizations Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Organizations You Can Support</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-xl">1. California Fire Foundation</h3>
                <p className="text-lg">Supports firefighters and provides aid to fire victims.</p>
                <Link 
                  href="https://www.cafirefoundation.org" 
                  target="_blank"
                  className="text-blue-600 hover:underline text-lg"
                >
                  www.cafirefoundation.org
                </Link>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-xl">2. Los Angeles Fire Department Foundation</h3>
                <p className="text-lg">Provides essential equipment, technology, and training for LAFD.</p>
                <Link 
                  href="https://www.supportlafd.org" 
                  target="_blank"
                  className="text-blue-600 hover:underline text-lg"
                >
                  www.supportlafd.org
                </Link>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-xl">3. American Red Cross – Los Angeles Region</h3>
                <p className="text-lg">Offers emergency shelter, food, and relief services for wildfire victims.</p>
                <Link 
                  href="https://www.redcross.org/la" 
                  target="_blank"
                  className="text-blue-600 hover:underline text-lg"
                >
                  www.redcross.org/la
                </Link>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-xl">4. Direct Relief</h3>
                <p className="text-lg">Delivers medical aid and supplies to hospitals and emergency responders.</p>
                <Link 
                  href="https://www.directrelief.org" 
                  target="_blank"
                  className="text-blue-600 hover:underline text-lg"
                >
                  www.directrelief.org
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li><span className="font-medium">BraidPay's Role:</span> We serve as an intermediary platform, collecting and distributing donations in USDC to trusted organizations managing relief efforts.</li>
              <li><span className="font-medium">Transparency:</span> All contributions are verifiable onchain through our transparency dashboard.</li>
              <li><span className="font-medium">Liability:</span> BraidPay carefully selects reputable charities but is not responsible for the actions or operational decisions of recipient organizations.</li>
              <li><span className="font-medium">Finality of Transactions:</span> Due to the nature of cryptocurrency, all donations are non-refundable.</li>
              <li><span className="font-medium">Tax Advisory:</span> Contributions may or may not be tax-deductible depending on your jurisdiction. Consult a tax professional for specific guidance.</li>
            </ul>
          </div>

          <p className="mt-8 text-center italic text-lg">
            By participating in this initiative, you acknowledge and agree to these terms. Together, let's help those affected by the Los Angeles wildfires—and show the world that modern technology can foster greater impact and accountability in charitable giving.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 