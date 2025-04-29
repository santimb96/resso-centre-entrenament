export default function TextComponent ({ text, textColor = 'secondary' }) {
  return (
    <p className={`text-${textColor} text-[1.25rem] md:text-[1.75rem] my-5`} dangerouslySetInnerHTML={{__html: text}}/>
  )
}