import Layout from '../components/Layout'

// NextJS에서 제공하는 API
export default function App({ Component, pageProps }) {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}
