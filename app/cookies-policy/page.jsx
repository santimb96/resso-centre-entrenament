import TextComponent from '@/components/common/TextComponent'
import TitleSection from '@/components/common/TitleSection'
import { WIDTH_LAYOUT } from '@/constants/vars'

export default function CookiesPolicy() {
  const COOKIES_POLICY_CONTENT = `<p>En cumplimiento con la normativa vigente, le informamos que este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación, analizar el uso de la página y ofrecer contenido personalizado.</p>
   <h3 class='font-bold my-2.5 text-accent'>¿Qué son las cookies?</h2>
   <p class='mb-5'>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Estas cookies nos permiten:</p>
   <ol class='flex flex-col gap-2.5'>
     <li>Analizar métricas de uso para mejorar nuestro sitio</li>
     <li>Comprender el tráfico de usuarios y sus patrones de navegación</li>
     <li>Mostrar publicidad relevante basada en sus intereses (marketing)</li>
   </ol>

   <h3 class='font-bold my-2.5 text-accent'>Tipos de cookies que utilizamos:</h2>
   <ol>
     <li>Cookies técnicas: Necesarias para el funcionamiento básico del sitio</li>
     <li>Cookies de análisis: Para medir y analizar el uso del sitio</li>
     <li>Cookies de marketing: Para mostrar publicidad personalizada</li>
   </ol>

   <h3 class='font-bold my-2.5 text-accent'>Gestión de cookies:</h2>
   <p>Puede configurar su navegador para aceptar, rechazar o eliminar las cookies. Tenga en cuenta que al desactivar ciertas cookies, algunos servicios del sitio podrían no funcionar correctamente.</p>

   <h3 class='font-bold my-2.5 text-accent'>Aceptación de cookies:</h2>
   <p>Al continuar navegando en nuestro sitio, usted acepta el uso de estas cookies. Para más información, consulte nuestra Política de Privacidad.</p>

   <h3 class='font-bold my-2.5 text-accent'>Actualizaciones:</h2>
   <p>Esta política puede ser actualizada periódicamente. Le recomendamos revisarla regularmente.</p>
 </div>
</div>`

  return (
    <div className={`${WIDTH_LAYOUT} self-center my-10`}>
      <TitleSection title='Política de cookies' color='accent' />
      <TextComponent text={COOKIES_POLICY_CONTENT} textColor='secondary' />
    </div>
  )
}
