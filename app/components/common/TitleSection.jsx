export default function TitleSection({title, color = 'primary', stroke = 'Secondary'}) {
  return <h3 className={`text-${color} text-[2.25rem] md:text-[3rem] font-bold textStroke${stroke}`} dangerouslySetInnerHTML={{__html: title}} />
}