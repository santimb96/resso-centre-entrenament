import { WORKSHOPS } from '@/constants/vars'

export async function getWorkshops(){
  const data = WORKSHOPS
  if (!data) {
    return { code: 500, error: 'Error fetching data', data: null }
  }
  return { code: 200, error: null, data }
}