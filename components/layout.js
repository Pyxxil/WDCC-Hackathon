import Head from "next/head";
import Header from "./header";

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>WDCC - App Template</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css"
        ></link>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <Header user={user} loading={loading} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
