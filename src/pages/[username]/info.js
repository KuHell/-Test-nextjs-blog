import styles from '../../../styles/Home.module.css'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function UsernameInfo() {
  return (
    <>
      <h1 className={(styles.title, styles.time)}>UsernameInfo</h1>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
