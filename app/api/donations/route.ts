import { NextResponse } from 'next/server'

interface Transfer {
  value: number
  hash: string
}

interface AlchemyResponse {
  jsonrpc: string
  id: number
  result: {
    transfers: Transfer[]
  }
}

export async function GET() {
  try {
    const response = await fetch(`https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        method: 'alchemy_getAssetTransfers',
        params: [
          {
            fromBlock: '0x17B9B5B',
            toBlock: 'latest',
            toAddress: 'your-wallet-address',
            category: ['erc20'],
            order: 'asc',
            withMetadata: false,
            excludeZeroValue: true,
            maxCount: '0x3e8',
            contractAddresses: ['donation-coin-contract-address']
          }
        ]
      })
    })

    const data = await response.json() as AlchemyResponse

    const totalDonationAmount = data.result.transfers.reduce((acc, transfer) => acc + transfer.value, 0)
    const totalDonationCount = data.result.transfers.length

    return NextResponse.json({
      totalDonationAmount,
      totalDonationCount
    })

  } catch (error) {
    console.error('Error fetching donation data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donation data' },
      { status: 500 }
    )
  }
} 