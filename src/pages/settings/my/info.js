import styles from '../../../../styles/Home.module.css'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Myinfo() {
  const [clicked, setClicked] = useState(false)
  const { status = 'initail' } = router.query

  return (
    <>
      <h1 className={(styles.title, styles.time)}>Myinfo</h1>
      <h1 className={(styles.title, styles.time)}>clicked {clicked}</h1>
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
