import { TanStackDevtools } from '@tanstack/react-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import type { ErrorComponentProps } from '@tanstack/react-router';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';


import appCss from '../styles.css?url';

import type { QueryClient } from '@tanstack/react-query';

interface MyRouterContext {
  queryClient: QueryClient
}

const THEME_INIT_SCRIPT = `(function(){
  try {
    var stored = window.localStorage.getItem('theme');
    var mode = (stored === 'light' || stored === 'dark') ? stored : 'light';
    var root = document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
    root.style.colorScheme = mode;
  } catch (e) {}
})();`

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Desa Sumberkejayan',
      },
      {
        name: 'description',
        content: 'Portal resmi informasi dan pelayanan publik Desa Sumberkejayan. Akuntabel, Transparan, dan Mandiri.',
      },
      {
        property: 'og:title',
        content: 'Desa Sumberkejayan',
      },
      {
        property: 'og:description',
        content: 'Portal resmi informasi dan pelayanan publik Desa Sumberkejayan.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  errorComponent: (props: ErrorComponentProps) => {
    return (
      <RootDocument>
        <div className="p-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-red-600">Terjadi Kesalahan</h1>
          <p className="text-gray-600 mt-2">{props.error.message}</p>
          <button
            onClick={() => props.reset()}
            className="mt-6 px-4 py-2 bg-primary text-white rounded-lg"
          >
            Coba Lagi
          </button>
        </div>
      </RootDocument>
    )
  },
  notFoundComponent: () => {
    return (
      <RootDocument>
        <div className="p-20 text-center">
          <h1 className="text-6xl font-extrabold text-primary">404</h1>
          <p className="text-xl mt-4">Halaman tidak ditemukan.</p>
        </div>
      </RootDocument>
    )
  },
  component: () => (
    <RootDocument>
      <Outlet />
    </RootDocument>
  ),
})
function RootDocument({ children }: { children: React.ReactNode }) {
  const { queryClient } = Route.useRouteContext()

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-white" suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className='w-full max-w-7xl mx-auto'>
            {children}
          </main>
          <Footer />
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
          <Scripts />
        </QueryClientProvider>
      </body>
    </html>
  )
}

