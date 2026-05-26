import { WIDTH_LAYOUT } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'

const ALL_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const MORNING_DAYS = new Set(['Martes', 'Miércoles', 'Jueves'])
const AFTERNOON_DAYS = new Set(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'])
const MORNING_START = 8
const AFTERNOON_START = 16
const MORNING_END = 13
const AFTERNOON_END = 21

function generateSlots(startHour, endHour) {
  const slots = []
  for (let h = startHour; h < endHour; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    slots.push(`${String(h).padStart(2, '0')}:30`)
  }
  return slots
}

const MORNING_SLOTS = generateSlots(MORNING_START, MORNING_END)
const AFTERNOON_SLOTS = generateSlots(AFTERNOON_START, AFTERNOON_END)

const TAG_STYLES = {
  grupal: 'bg-blue-100 text-blue-500 border-blue-200',
  openbox: 'bg-orange-100 text-orange-500 border-orange-200',
}

function ClassTag({ label, type = 'grupal' }) {
  return (
    <span className={`inline-block border text-xs font-semibold px-2.5 py-1 rounded-lg ${TAG_STYLES[type]}`}>
      {label}
    </span>
  )
}

function TimeRow({ time, isEven, isMorning }) {
  const activeDays = isMorning ? MORNING_DAYS : AFTERNOON_DAYS
  return (
    <tr className={isEven ? 'bg-gray-50' : 'bg-white'}>
      <td className='pl-7 py-2 text-sm font-semibold text-secondary border-b border-gray-200 whitespace-nowrap'>
        {time}
      </td>
      {ALL_DAYS.map(day => (
        <td key={day} className='p-2 text-center border-b border-gray-200'>
          {activeDays.has(day)
            ? <ClassTag label='Grupal' type='grupal' />
            : <ClassTag label='Open box' type='openbox' />
          }
        </td>
      ))}
    </tr>
  )
}

export default function Schedule() {
  return (
    <section id='horarios' className='w-full flex flex-col justify-center items-center bg-accent py-10 px-2.5'>
      <div className={`${WIDTH_LAYOUT} flex flex-col justify-center items-center gap-6`}>
        <TitleSection title='Horarios' />
        <div className='w-[75%] flex flex-col items-center gap-1'>
          <TextComponent text='Sesiones disponibles de lunes a viernes, tanto por las mañanas como por las tardes.' textColor='primary' textAlign='text-center' margin='my-0' />
        </div>

        <div className='w-full overflow-x-auto rounded-xl'>
          <table className='w-full min-w-[560px] border-collapse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='px-5 py-3 text-left text-sm font-bold text-secondary/50 border-b bg-secondary text-white'>
                  Horario
                </th>
                {ALL_DAYS.map(day => (
                  <th
                    key={day}
                    className={`p-3 text-center text-sm font-bold border-b border-gray-200 bg-secondary ${AFTERNOON_DAYS.has(day) ? 'text-white' : 'text-white/30'}`}
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
      </div>
    </section>
  )
}
