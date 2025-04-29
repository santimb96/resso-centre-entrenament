import { Noto_Sans, Work_Sans } from 'next/font/google'


// for headers
export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['700', '800','900'],
})
// for body
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})