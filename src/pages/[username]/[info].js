import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../../../styles/Home.module.css'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info, uid } = router.query
  const [name, setName] = useState('')

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name)
  //     })
  // }, [])

  useEffect(() => {
    if (uid != null) {
      fetch(`/api/userInfo/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name)
        })
    }
  }, [uid])

  return (
    <>
      <h1 className={(styles.title, styles.time)}>
        {username} {info}
      </h1>

      <h1 className={(styles.title, styles.time)}>Name : {name}</h1>
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
