import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <Link to={`/works/${work.id}`} >{work.title}</Link>
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
