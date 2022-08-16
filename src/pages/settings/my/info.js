import styles from '../../../../styles/Home.module.css'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function Myinfo() {
  return (
    <>
      <h1 className={(styles.title, styles.time)}>Myinfo</h1>
    </>
  )
}

Myinfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
