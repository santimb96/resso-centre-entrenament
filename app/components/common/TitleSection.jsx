import { workSans } from '../../lib/fonts'

export default function TitleSection({title, color = 'primary', stroke = 'Secondary'}) {
  return <h3 className={`text-${color} ${workSans.className} font-extrabold text-[2.25rem] md:text-[3rem] textStroke${stroke}`} dangerouslySetInnerHTML={{__html: title}} />
}