import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'

export async function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  }
}

export default function ISR({ time }) {
  return (
    <div className={styles.container}>
      <h1 className={(styles.title, styles.time)}>{time}</h1>
    </div>
  )
}

ISR.getLayout = function getLayout(page) {
  console.log('>>>>>>>>>>>', page)
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
