import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Acme Design System</title>
      </Head>
      <main className="w-full h-full">{children}</main>
    </>
  )
}
