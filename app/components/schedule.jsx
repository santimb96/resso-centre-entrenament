import { WIDTH_LAYOUT } from '@/constants/vars'
import TextComponent from './common/TextComponent'
import TitleSection from './common/TitleSection'

const ALL_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const ACTIVE_DAYS = new Set(['Martes', 'Miércoles', 'Viernes'])

function generateSlots(startHour, endHour) {
  const slots = []
  for (let h = startHour; h < endHour; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    slots.push(`${String(h).padStart(2, '0')}:30`)
  }
  return slots
}

const MORNING_SLOTS = generateSlots(8, 13)
const AFTERNOON_SLOTS = generateSlots(16, 21)

function ClassTag({ label }) {
  return (
    <span className='inline-block bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold px-2.5 py-1 rounded-lg'>
      {label}
    </span>
  )
}

function TimeRow({ time, isEven }) {
  return (
    <tr className={isEven ? 'bg-gray-50' : 'bg-white'}>
      <td className='p-3 text-sm font-semibold text-secondary border-b border-gray-200 whitespace-nowrap'>
        {time}
      </td>
      {ALL_DAYS.map(day => (
        <td key={day} className='p-3 text-center border-b border-gray-200'>
          {ACTIVE_DAYS.has(day)
            ? <ClassTag label='Grupal' />
            : <span className='text-secondary/30 font-medium'>—</span>
          }
        </td>
      ))}
    </tr>
  )
}

export default function Schedule() {
  return (
    <section id='horarios' className='w-full flex flex-col justify-center items-center scroll-m-10 bg-accent py-10 px-2.5'>
      <div className={`${WIDTH_LAYOUT} flex flex-col justify-center items-center gap-6`}>
        <TitleSection title='Horarios' />
        <TextComponent text='Clases grupales — Martes, Miércoles y Viernes' textColor='primary' textAlign='text-center' margin='my-0' />

        <div className='w-full overflow-x-auto rounded-xl'>
          <table className='w-full min-w-[560px] border-collapse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='p-3 text-left text-sm font-bold text-secondary/50 border-b border-gray-200'>
                  Horario
                </th>
                {ALL_DAYS.map(day => (
                  <th
                    key={day}
                    className={`p-3 text-center text-sm font-bold border-b border-gray-200 ${ACTIVE_DAYS.has(day) ? 'text-secondary' : 'text-secondary/30'}`}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MORNING_SLOTS.map((time, i) => (
                <TimeRow key={time} time={time} isEven={i % 2 === 0} />
              ))}
              <tr>
                <td colSpan={8} className='py-2 px-3 text-center text-sm text-secondary/40 italic border-b border-gray-200 bg-gray-50'>
                  No hay clases en estas horas
                </td>
              </tr>
              {AFTERNOON_SLOTS.map((time, i) => (
                <TimeRow key={time} time={time} isEven={i % 2 === 0} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
