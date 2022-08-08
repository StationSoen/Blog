import * as React from "react"
import { Link } from "gatsby"
import { Margin } from "./Margin"
import { DEFAULT_BREAKPOINTS } from "gatsby-plugin-image/dist/src/image-utils"

interface LayoutProps {
  title: string
  subTitle?: string
  children: React.ReactNode
}
const Layout = ({ title, children, subTitle }: LayoutProps) => {
  const headerHeight = 80
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-w-back">
      <header
        className="fixed top-0 flex w-full mb-12 bg-key-blue border-b-[1px] items-center justify-center shadow-md "
        style={{ height: headerHeight }}
      >
        <div className="flex flex-row flex-1 max-w-6xl px-10 column mg-0 font-[ONE-Mobile-Title] items-baseline">
          <h1 className="text-3xl font-oneMobile text-w-l">
            <Link to="/">{title}</Link>
          </h1>
          <h2 className="ml-2 text-lg font-oneMobile text-w-m">{` | ${
            subTitle ? subTitle : ""
          }`}</h2>
        </div>
      </header>
      <div className="flex flex-col flex-1 w-full max-w-5xl px-10 column mg-0 bg-w-l">
        <main className="flex flex-col flex-1">
          <Margin margin={headerHeight} />
          {children}
        </main>
      </div>
      <footer className="flex flex-row items-center justify-center w-full border-key-light_blue bg-b-m border-t-[1px] py-4">
        <div className="flex flex-row items-center justify-between flex-1 max-w-5xl px-10 column mg-0 ">
          <p className="mr-1 text-sm text-w-m font-oneMobile">
            {"Written by Sunghyun Yoo"}
          </p>
          <div>
            <a
              className="mr-1 text-sm text-w-m font-oneMobile"
              href="https://github.com/StationSoen"
            >
              Github
            </a>
            <a
              className="mr-1 text-sm text-w-m font-oneMobile"
              href="mailto:me@sunghyun.co"
            >
              Mail
            </a>
            <a
              className="mr-1 text-sm text-w-m font-oneMobile"
              href="https://portfolio.sunghyun.co"
            >
              Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
