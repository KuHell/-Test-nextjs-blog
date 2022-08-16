import styles from '../../../styles/Home.module.css'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CategorySlug() {
  return (
    <>
      <h1 className={(styles.title, styles.time)}>CategorySlug</h1>
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
