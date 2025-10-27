import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}

