import '@styles/globals.css'

import Header from '@components/Header'
import Provider from '@components/Provider'
import Footer from '@components/Footer'

export const metadata = {
  title: 'FoodieFaves',
  description: 'Discover New Food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider session={null}>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}
