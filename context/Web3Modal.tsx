'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi1/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'd84cd42c4f11f337cefdd2fc808ec41f'

// 2. Create wagmiConfig
const metadata = {
  name: 'Σ Lumina',
//   description: 'Web3Modal Example',
  url: 'https://o.agoria.dev/',
  icons: ['https://agoria.dev/logo_agoria.png']
}

const chains = [mainnet, arbitrum]

const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
})

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3Modal({ children }: {children: React.ReactNode}) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}