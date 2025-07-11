import { Goal, HealthCheck, Services, Users } from '../icons'

export default function ServiceCard ({props}) {
  const { title, description, icon } = props
  return (
    <aside className="flex flex-col gap-2.5 p-5 bg-primary rounded-lg shadow-custom w-full">
      <div className="w-full min-h-1/4 flex items-center justify-center text-accent my-5">
        {icon === 'Users' && <Users size={120} />}
        {icon === 'Goal' && <Goal size={120} />}
        {icon === 'HealthCheck' && <HealthCheck size={120} />}
        {icon === 'Services' && <Services size={120} />}
      </div>
      <h3 className="text-accent text-2xl font-bold">{title}</h3>
      <p className="text-pretty font-normal">{description}</p>
    </aside>
  )
}