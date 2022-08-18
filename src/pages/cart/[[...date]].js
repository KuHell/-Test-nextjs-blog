import styles from '../../../styles/Home.module.css'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query
  return (
    <>
      <h1 className={(styles.title, styles.time)}>
        CartDate Slug {JSON.stringify(date)}{' '}
      </h1>
      <Link href="/cart/2022/08/18">
        <a>2022년08월18일 로</a>
      </Link>
      <button onClick={() => router.push('/cart/2022/08/20')}>
        2022년08월20일 로
      </button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
