export default function TextComponent ({ text, textColor = 'secondary', margin = 'my-5' }) {
  return (
    <p className={`text-${textColor} text-[1.25rem] md:text-[1.5rem] ${margin} font-medium`} dangerouslySetInnerHTML={{__html: text}}/>
  )
}