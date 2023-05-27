import { Metadata } from 'next'
import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lexical Rich Text Editor | Next.js 13',
  description: 'Prepopulated with daily standup text',
  keywords: ["lexical", "lexical rich text editor", "daily standup", "next.js", "next.js 13"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
