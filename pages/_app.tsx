import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
export default MyApp
