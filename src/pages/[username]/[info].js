import styles from '../../../styles/Home.module.css'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'
import { useRouter } from 'next/router'

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info } = router.query
  return (
    <>
      <h1 className={(styles.title, styles.time)}>
        {username} {info}
      </h1>
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
