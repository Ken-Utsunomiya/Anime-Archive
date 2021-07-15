import { useEffect, useState } from 'react'
import httpClient from '../apis/anime'

const WorkList = () => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    const getWorks = async () => {
      const response = await httpClient.get('/works')
      setWorks(response.data.works)
    }
    getWorks()
  }, [])

  const renderedWorks = works.map((work) => {
    return (
      <div className='item' key={work.id}>
        <p>{work.title}</p>
      </div>
    )
  })

  return (
    <div>
      {renderedWorks}
    </div>
  )
}

export default WorkList
