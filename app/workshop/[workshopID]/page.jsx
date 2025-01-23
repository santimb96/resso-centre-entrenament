export default async function Workshop ({ params }) {
  const { workshopID } = params
  return (
    <div>
      <h1>Workshop {workshopID}</h1>
    </div>
  )
}