import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <>
      <h1>
        <Link href="/">
          <a>Home으로</a>
        </Link>
        {children}
      </h1>
    </>
  )
}
