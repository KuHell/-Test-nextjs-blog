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
4. SSI(Incremental Static Regeneration)

### SSR(Server Side Render)

> 서버에서 만들어서 클라이언트로 보내준다

서버에서 사용자에게 보여줄 페이지를 모두 만들어서 사용자에게 페이지를 보여주는 방식이다.
SSR방식을 사용하면 모든 데이터가 매핑된 서비스 페이지를 클라이언트에게 바로 보여진다 페이지를 구성하는 속도는 늦어지지만 전체적으로 사용자에게 보여주는 콘텐츠 구성이 완료되는 시점은 빨라진다는 장점이 있다.

index.js에 함수 하나를 만들어서 테스트 진행

```javascript
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

---

### CSR(Client Side Rendering)

> 브라우저 에서 데이터를 그린다.

CSR은 SSR보다 초기 전송되는 페이지의 속도는 빠르지만 서비스에서 필요한 데이터를 클라이언트(브라우저)에서 추가로 요청하여 재구성해야 하기 때문에 전제적인 페이지 완료 시점은 SSR보다 느려진다.

```javascript
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

CSR.js 파일을 추가해 다음과 같이 작성 후 테스트 진행

![](https://velog.velcdn.com/images/itkdgus489/post/d8b803bf-226e-4da7-bb55-365fa334957e/image.png)

CSR버튼 클릭시 CSR로 이동 하면서 console.log에 `client`가 찍히는걸 확인 할 수 있다.
![](https://velog.velcdn.com/images/itkdgus489/post/6b0dc6b4-aa35-42a9-beaf-d22f6137d0db/image.png)

---

### SSG(Static-Site Generation)

> 정적인 사이트 데이터를 가져와서 만들어 둔다

해당 방식은 클라이언트에서 필요한 페이지들을 사전에 미리 준비해뒀다가, 요청을 받으면 이미 완성된 파일을 반환하여 브라우저에서 보여지게 된다

```javascript
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className={(styles.title, styles.time)}>time{time}</h1>
    </>
  )
}
```

SSG.js파일을 추가해 다음과 같이 작성 후 테스트 진행

![](https://velog.velcdn.com/images/itkdgus489/post/59e197c4-990e-4366-bda3-2b76fcc4ecf3/image.png)
서버에서 실행이 된다

> 실행을 dev로 실행 했기떄문에 SSG방식으로 실행이 된다

프로젝트릴 `build`후 `yarn start`로 실행 후 테스트 진행 해야 올바른 결과 확인가능
테스트 후 실행 하면

> client와 server 아무곳도 console이 찍히지 않는다. 그 이유는 정적인 사이트를 미리 만들두기 때문에 build머신 자체가 데이터를 가져와서 그려두는 이유 때문에 어디에도 console이 나오지 않는다

블로그 같은 만들어 두면 계속 사용 하는 구조의 프로젝트에서 사용 하면 서버의 과부하를 방지 할 수 있다.

---

# SSG SSR 방식 차이점

## SSG

빌드 타임에 pre-render를한다

페이지의 내용물이 외부 데이터에 의존적인 상황

- 이 상황에는 `getStaticProps`를 활용한다.

페이지의 Paths 까지 외부 데이터에 위존적인 상황

- 이 상황은 `getStaticPaths`도 함께 활용해야 한다.

## SSR

요청 타임에 pre-render를 한다

# Layout

여러 Page들의 공통 처리

하나의 공통된 Layout을 쓰는 경우

components/Layout.js

컴포넌트 하나를 pages/\_app.js에서 활용하면 된다.

> 페이지가 아니라 컴포넌트에는 SSR을 할 수 없다.

# NextJS 가 제공하는 최적화 Image Component

- Improved Performance

- Visual Stability(CLS-Cumulative Layout Shift 방지)

- Faster Page Loads(viewport 진입시 로드 / blur 처리)

- Asset Flexibility(리사이징)

---

# Router

NextJS는 Router가 file-system기반이다.

파일을 만들면 자동으로 router가 적용된다.

## Dynamic Routes

[slug] 값은 어떻게 활용할 것 인가

pages/category/[slug].js

```javascript
import { useRouter } from 'next/router'
const route = useRouter()
const { slug } = router.query
```

`route.query`로 URL에 들어간 값을 출력 할 수 있다.

```javascript
export default function CategorySlug() {
  const router = useRouter()
  const { slug, from } = router.query
  return (
    <>
      <h1 className={(styles.title, styles.time)}>
        Category {slug} {from}
      </h1>
    </>
  )
}
```

`localhost:3000/category/Test?from=KuHell`을 입력하면 from에는 KuHell이 출력된다

없으면 undefined, null

## shallow Routing

getServerSideProps / getStaticProps 등을 다시 실행 시키지 않고,

### 상태만 유지하면서 URL만 바꾸는 경우

사용자가 어떤 동작을 했고, 그 기록을 query로 남기고 싶을때

query로 남기면 사용자가 새로고침을 해도 유지된다.

### 현재 상태를 잃지 않고 URL을 바꾸는 방법

- location.replace('url') = 로컬 state 유지 안됨(리렌더)
- router.push('url') = 로컬 state 유지 / data fetching 일어남
- router.push('url', as, { shallow: ture }) = 로컬 state유지 / data fetching 일어나지 않음

```javascript
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
```

---

# API

Application Programming Interface

응용 프로그래밍 인터페이스
컴퓨터나 컴퓨터 프로그램 사이의 연결

Frontend Service - Backend Service 간의 연결

Frontend Service는 고객과 닿아있고,

Backend Service는 DB에 닿아있다.

고객이 DB에 접근 하기 위해 FE는 BE와 연결되어야 한다 이떄 API를
활용한다. BE가 제공해주는 API를 통해 DB의 내용을 활용할 수 있다.

# NextJS가 제공하는 API Routes

pages/api/\*
