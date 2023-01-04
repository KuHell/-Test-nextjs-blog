import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function CSR() {
  const [time, setTime] = useState()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1 className={(styles.title, styles.time)}>{time}</h1>
    </>
  )
}

CSR.getLayout = function getLayout(page) {
  return (
    // <Layout>
    <SubLayout>{page}</SubLayout>
    // </Layout>
  )
}
