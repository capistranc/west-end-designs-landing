import Head from "next/head";
import NextLink from "next/link";
import Header from './Header'

const name = "Chris";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <Header />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <NextLink href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  alt={name}
                />
              </a>
            </NextLink>
            <h2>
              <NextLink href="/">
                <a >{name}</a>
              </NextLink>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <NextLink href="/">
            <a>← Back to home</a>
          </NextLink>
        </div>
      )}
    </div>
  );
}
