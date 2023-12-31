import { useEffect } from 'react'
import '@/css/global.css'
import '@/css/shopping.css'
import '@/css/history.css'
import '@/css/restaurant.css'

import '@/styles/carousel.scss'
import DefaultLayout from '@/components/layout/default-layout'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}
