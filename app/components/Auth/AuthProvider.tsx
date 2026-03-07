'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { createClient } from '../../lib/supabase/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ContactProvider } from '../ContactPopup/ContactContext'

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-bricolage), sans-serif',
    body: 'var(--font-bricolage), sans-serif',
  },
  radii: {
    card: '24px',
    inner: '12px',
    pill: '9999px',
  },
  fontSizes: {
    'display-2xl': '7rem', // ~112px
    'display-xl': '5.5rem', // ~88px
    'display-lg': '4.5rem', // ~72px
    'display-md': '3.75rem', // ~60px
    'display-sm': '2.5rem', // ~40px
  },
  lineHeights: {
    tight: '1.1',
    shorter: '1.2',
    short: '1.3',
    base: '1.5',
    tall: '1.7',
  }
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        router.refresh()
      }
    })

    return () => subscription.unsubscribe()
  }, [router, supabase])

  return (
    <ContactProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ContactProvider>
  )
}