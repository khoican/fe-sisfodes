import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import type { ErrorComponentProps } from '@tanstack/react-router'
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import Setting from '#/components/Setting'
import { useVoice } from '#/hooks/voice.hook'
import type { QueryClient } from '@tanstack/react-query'
import { FaWhatsapp } from 'react-icons/fa6'

interface MyRouterContext {
  queryClient: QueryClient
}

const THEME_INIT_SCRIPT = `(function(){
  try {
    var storedTheme = window.localStorage.getItem('theme');
    var themeMode = (storedTheme === 'light' || storedTheme === 'dark') ? storedTheme : 'light';
    var root = document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(themeMode);
    root.style.colorScheme = themeMode;

    var storedColor = window.localStorage.getItem('sisfodes-primary-color');
    if (storedColor) {
      root.style.setProperty('--primary', storedColor);
    }
  } catch (e) {}
})();`

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: 'Desa Sumberkejayan'
      },
      {
        name: 'description',
        content:
          'Portal resmi informasi dan pelayanan publik Desa Sumberkejayan. Akuntabel, Transparan, dan Mandiri.'
      },
      {
        property: 'og:title',
        content: 'Desa Sumberkejayan'
      },
      {
        property: 'og:description',
        content:
          'Portal resmi informasi dan pelayanan publik Desa Sumberkejayan.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: appCss
      }
    ]
  }),
  errorComponent: (props: ErrorComponentProps) => {
    return (
      <div className='p-20 flex flex-col items-center justify-center text-center'>
        <h1 className='text-2xl font-bold text-red-600'>Terjadi Kesalahan</h1>
        <p className='text-gray-600 mt-2'>{props.error.message}</p>
        <button
          onClick={() => props.reset()}
          className='mt-6 px-4 py-2 bg-primary text-white rounded-lg'
        >
          Coba Lagi
        </button>
      </div>
    )
  },
  notFoundComponent: () => {
    return (
      <div className='p-20 text-center h-[70vh] flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-9xl font-extrabold text-primary'>404</h1>
        <p className='text-sm md:text-xl mt-4'>Halaman tidak ditemukan.</p>
      </div>
    )
  },
  component: () => (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
})
function RootDocument ({ children }: { children: React.ReactNode }) {
  const { queryClient } = Route.useRouteContext()
  useVoice() // Aktivasi fitur Text-to-Speech global

  return (
    <html lang='id' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body
        className='font-sans antialiased wrap-anywhere selection:bg-primary selection:text-white'
        suppressHydrationWarning
      >
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className='w-full max-w-7xl mx-auto'>
            {children}
            
            <div className='fixed bottom-8 right-4 md:bottom-16 md:right-8 lg:bottom-24 lg:right-16 z-50 flex flex-col gap-4 items-center'>
              <Setting />
              <button
                className='rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 transition-all hover:scale-110'
                aria-label='chat-whatsapp'
              >
                <FaWhatsapp className='w-6 h-6 md:w-7 md:h-7' />
              </button>
            </div>
          </main>
          <Footer />
          <TanStackDevtools
            config={{
              position: 'bottom-left'
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />
              },
              TanStackQueryDevtools
            ]}
          />
          <Scripts />
        </QueryClientProvider>
      </body>
    </html>
  )
}
