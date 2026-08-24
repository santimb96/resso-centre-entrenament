import { RESSO_INFO, WIDTH_LAYOUT } from '@/constants/vars'
import Link from 'next/link'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'
import { Clock } from './icons'

const ALL_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const MORNING_DAYS = new Set(['Lunes', 'Martes', 'Miércoles', 'Jueves'])
const AFTERNOON_DAYS = new Set(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'])
const MORNING_START = 8
const AFTERNOON_START = 16
const MORNING_END = 12
const AFTERNOON_END = 20

function generateSlots(startHour, endHour) {
  const slots = []
  for (let h = startHour; h < endHour; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    slots.push(`${String(h).padStart(2, '0')}:30`)
  }
  slots.push(`${String(endHour).padStart(2, '0')}:00`)
  return slots
}

const MORNING_SLOTS = generateSlots(MORNING_START, MORNING_END)
const AFTERNOON_SLOTS = generateSlots(AFTERNOON_START, AFTERNOON_END)

const TAG_STYLES = {
  grupal:     'bg-blue-100    text-blue-600    border-blue-200',
  openbox:    'bg-green-100   text-green-600   border-green-200',
  simulacros: 'bg-purple-100  text-purple-600  border-purple-200',
  talleres:   'bg-sky-100    text-sky-600    border-sky-200',
}

const TAG_LABELS = {
  grupal:     'Grupal',
  openbox:    'Open box',
  simulacros: 'Simulacros',
  talleres:   'Talleres',
}

function ClassTag({ type }) {
  return (
    <span className={`inline-block border text-xs font-semibold px-2.5 py-1 rounded-lg ${TAG_STYLES[type]}`}>
      {TAG_LABELS[type]}
    </span>
  )
}

function Dash() {
  return <span className='text-gray-300 text-xs'>—</span>
}

function getCellContent(day, time, isMorning) {
  const hour = parseInt(time.split(':')[0])

  if (day === 'Domingo') return null

  if (day === 'Sábado') {
    if (!isMorning) return null
    if (hour < 9) return null
    if (hour === 9) return 'simulacros'
    return 'talleres'
  }

  if (isMorning) {
    return MORNING_DAYS.has(day) ? 'grupal' : 'openbox'
  }
  return AFTERNOON_DAYS.has(day) ? 'grupal' : null
}

function TimeRow({ time, isEven, isMorning }) {
  return (
    <tr className={isEven ? 'bg-gray-50' : 'bg-white'}>
      <td className='p-3 text-center text-sm font-semibold text-secondary border-b border-gray-200 whitespace-nowrap'>
        {time}
      </td>
      {ALL_DAYS.map(day => {
        const tagType = getCellContent(day, time, isMorning)
        return (
          <td key={day} className='p-2 text-center border-b border-gray-200'>
            {tagType ? <ClassTag type={tagType} /> : <Dash />}
          </td>
        )
      })}
    </tr>
  )
}

export default function Schedule() {
  return (
    <section id='horarios' className='w-full flex flex-col justify-center items-center bg-accent py-8 px-4'>
      <div className={`${WIDTH_LAYOUT} flex flex-col items-center gap-8`}>
        <div className='w-full flex flex-col items-center gap-3'>
          <TitleSection title='Horarios' />
          <TextComponent text='Sesiones disponibles todos los días excepto los domingos.' textColor='primary' textAlign='text-center' margin='my-0' />
        </div>

        <div className='w-full overflow-x-auto rounded-xl'>
          <table className='w-full min-w-[560px] border-collapse'>
            <thead>
              <tr>
                <th className='p-3 text-sm font-bold border-b bg-secondary text-white'>
                  <span className='w-full flex items-center justify-center'>
                    <Clock size={16} />
                  </span>
                </th>
                {ALL_DAYS.map(day => (
                  <th
                    key={day}
                    className={`p-3 text-center text-sm font-bold border-b bg-secondary ${day === 'Domingo' ? 'text-white/30' : 'text-white'}`}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MORNING_SLOTS.map((time, i) => (
                <TimeRow key={time} time={time} isEven={i % 2 === 0} isMorning={true} />
              ))}
              <tr>
                <td colSpan={8} className='py-2 px-3 text-center text-sm text-secondary/40 border-b border-gray-200 bg-gray-50'>
                  No hay clases en estas horas
                </td>
              </tr>
              {AFTERNOON_SLOTS.map((time, i) => (
                <TimeRow key={time} time={time} isEven={i % 2 === 0} isMorning={false} />
              ))}
            </tbody>
          </table>
        </div>

        <p className='text-white text-[1.125rem] md:text-[1.25rem] font-medium text-center'>
          ¡Cualquier duda, no dudes en{' '}
          <Link href={RESSO_INFO.whatsapp} target='_blank' rel='noopener noreferrer' className='underline hover:text-secondary duration-150 ease-in-out'>
            contactar con nosotros!
          </Link>
        </p>
      </div>
    </section>
  )
}
