export default function TextComponent ({ text, textColor = 'secondary', margin = 'my-5', textAlign = 'text-left' }) {
  return (
    <p className={`text-${textColor} text-[1.25rem] md:text-[1.5rem] ${textAlign} ${margin} font-medium`} dangerouslySetInnerHTML={{__html: text}}/>
  )
}