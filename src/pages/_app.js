import Layout from '../components/Layout'

// NextJS에서 제공하는 API
export default function App({ Component, pageProps }) {
  //Component가 getLayout을 가지고 있다면 이걸 실행
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}
