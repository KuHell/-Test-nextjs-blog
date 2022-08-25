import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <>
      <h1>
        <Link href="/">
          <a>test</a>
        </Link>

        {children}
      </h1>
    </>
  )
}
