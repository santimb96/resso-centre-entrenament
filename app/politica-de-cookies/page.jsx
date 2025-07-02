import TextComponent from '@/components/common/TextComponent'
import TitleSection from '@/components/common/TitleSection'
import { WIDTH_LAYOUT } from '@/constants/vars'

export default function CookiesPolicy() {
  return (
    <div className={`${WIDTH_LAYOUT} self-center min-h-[36dvh] my-10`}>
      <TitleSection title='Política de cookies' color='accent' />
      <TextComponent text='Página y contenido en construcción. Por el momento no se utiliza ningún tipo de manejo de cookies' textColor='secondary' />
    </div>
  )
}
