import styles from '../../../styles/Home.module.css'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <h1 className={(styles.title, styles.time)}>Category {slug}</h1>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
