export default function TextComponent ({ text, textColor = 'secondary' }) {
  return (
    <p className={`text-${textColor} text-[1.25rem] md:text-[1.5rem] my-5 font-medium`} dangerouslySetInnerHTML={{__html: text}}/>
  )
}