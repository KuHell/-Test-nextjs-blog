This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Next.js가 제시하는 3가지 Data Fetching 방법

1. SSR(Server Side Render)
2. CSR(Client Side Rendering)
3. SSG(Static-Site Generation)


### SSR(Server Side Render)
> 서버에서 만들어서 클라이언트로 보내준다

서버에서 사용자에게 보여줄 페이지를 모두 만들어서 사용자에게 페이지를 보여주는 방식이다.
SSR방식을 사용하면 모든 데이터가 매핑된 서비스 페이지를 클라이언트에게 바로 보여진다 페이지를 구성하는 속도는 늦어지지만 전체적으로 사용자에게 보여주는 콘텐츠 구성이 완료되는 시점은 빨라진다는 장점이 있다.

index.js에 함수 하나를 만들어서 테스트 진행

``` javascript

import styles from '../../styles/Home.module.css'

export async function getServerSideProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={(styles.title, styles.time)}>{time}</h1>
    </>
  )
}

```
index.js파일에 함수를 만들어서 실행을 시켜 보면
![](blob:https://velog.io/a38747f3-e953-4a2b-b9b9-897b11306dec)
서버에 server라고 콘솔이 찍힌다

서버에서 데이터를 받아서 클라이언트로 보내준걸 확인 할 수 있다.
***

### CSR(Client Side Rendering)
> 브라우저 에서 데이터를 그린다.

CSR은 SSR보다 초기 전송되는 페이지의 속도는 빠르지만 서비스에서 필요한 데이터를 클라이언트(브라우저)에서 추가로 요청하여 재구성해야 하기 때문에 전제적인 페이지 완료 시점은 SSR보다 느려진다.

``` javascript
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'


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
```
![](https://velog.velcdn.com/images/itkdgus489/post/d8b803bf-226e-4da7-bb55-365fa334957e/image.png)

CSR버튼 클릭시 CSR로 이동 하면서 console.log에 `client`가 찍히는걸 확인 할 수 있다.
![](https://velog.velcdn.com/images/itkdgus489/post/6b0dc6b4-aa35-42a9-beaf-d22f6137d0db/image.png)


***