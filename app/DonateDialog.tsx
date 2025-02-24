"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DonateDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className="bg-[rgb(0,82,255)] hover:bg-[rgb(0,82,255)]/90 text-white text-xl px-8 py-6 rounded-full"
        >
          Donate via USDC
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[85vh] p-0">
        <DialogTitle className="sr-only">
          Donation Form
        </DialogTitle>
        <div className="h-full">
          <iframe
            src="https://app.braidpay.com/p/qzUpj895N8a"
            className="w-full h-full"
            allow="payment"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 
