import React from 'react'
import 'antd/dist/antd.less'
import '../styles/global.less'

interface Props {
  Component: any
  pageProps: object
}

const AdminApp = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default AdminApp
