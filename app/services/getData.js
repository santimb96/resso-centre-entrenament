import { WORKSHOPS } from '@/constants/vars'

export async function getWorkshops(){
  const data = WORKSHOPS
  if (data.length === 0) {
    return new Error(JSON.stringify({ code: 500, error: 'Error fetching data', data: null }))
  }
  return data
}