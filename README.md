# Donations Website

A donation website built with Next.js, Shadcn UI, and Tailwind CSS, integrated with BraidPay for secure USDC donations.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/braidpay/Code-Sample-Donation)

## Features

- 🎨 Modern UI with Tailwind CSS and Shadcn components
- 💳 USDC donations with BraidPay integration
- 🔄 Real-time donation tracking
- 📱 Fully responsive design
- ⚡ Built with Next.js for optimal performance
- 🖼️ Interactive image gallery
- 📊 Live donation statistics

# Live Demo
[Demo](http://impact.braidpay.com/lafire)

## Prerequisites

Before you begin, you'll need:

1. A BraidPay account - [Watch setup guide](https://youtu.be/qGZ4zG4Vt94)
2. A BraidPay payment link - [Watch creation guide](https://youtu.be/kqhYSC8063Y)
3. Node.js 18+ installed
4. An Alchemy API key for donation statistics

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/braidpay/Code-Sample-Donation
cd donation
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
ALCHEMY_API_KEY=your_alchemy_api_key
```

4. Update the BraidPay payment link in `app/DonateDialog.tsx`:
```typescript
<iframe
  src="https://app.braidpay.com/p/your_payment_link_id"
  className="w-full h-full"
  allow="payment"
/>
```

5. Update the wallet address in `app/api/donations/route.ts`:
```typescript
params: [
  {
    toAddress: 'your-wallet-address',
    contractAddresses: ['donation-coin-contract-address']
  }
]
```

6. Run the development server:
```bash
npm run dev
# or
yarn dev
```

## Customization

### Content Modification
Edit `app/layout.tsx` to update:
- Site title and description
- OpenGraph and Twitter metadata
- Social sharing images

### Styling
- Tailwind classes can be modified directly in the components
- Global styles are in `app/globals.css`
- Theme configuration is in `tailwind.config.ts`
- Custom gradient background in `globals.css`

### Components
The template uses [Shadcn UI](https://ui.shadcn.com/) components, which can be customized in the `components/ui` directory.

## Deployment

1. Push your code to GitHub
2. Click the "Deploy with Vercel" button above
3. Follow Vercel's deployment process
4. Add your environment variables in Vercel's dashboard:
   - `ALCHEMY_API_KEY`
5. Deploy and test your live site

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:
- Open an issue in this repository
- Contact BraidPay support for payment-related queries
- Refer to the [Next.js documentation](https://nextjs.org/docs)
