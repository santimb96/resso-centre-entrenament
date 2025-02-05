import { promises as fs } from 'fs'

export async function getWorkshops(){
  // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  try {
    // await delay(2000)
    const res = await fs.readFile(process.cwd() + '/app/db/workshops.json')
    const data = JSON.parse(res)
    return { code: 200, error: null, data }
  } catch (error) {
    return { code: 500, error, data: null }
  }
}