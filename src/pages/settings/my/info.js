import styles from '../../../../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function Myinfo() {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'inital' } = router.query

  return (
    <>
      <h1 className={(styles.title, styles.time)}>Myinfo</h1>
      <h1 className={(styles.title, styles.time)}>clicked {String(clicked)}</h1>
      <h1 className={(styles.title, styles.time)}>status {status}</h1>
      <button
        onClick={() => {
          alert('edit')
          setClicked(!clicked)
          location.replace('/settings/my/info?status=editting')
        }}
      >
        edit(replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(!clicked)
          router.push('/settings/my/info?status=editting')
        }}
      >
        edit(router)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(!clicked)
          router.push('/settings/my/info?status=editting', undefined, {
            shallow: true,
          })
        }}
      >
        edit(shallow)
      </button>
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

// import React from 'react'

// const info = () => {
//   return <div>info</div>
// }

// export default info
