import Head from 'next/head'
import Header from './header'

function Layout ({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>WDCC - App Template</title>
        <link href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <Header user={user} loading={loading} />
      <main >{children}</main>

    </>
  )
}

export default Layout
