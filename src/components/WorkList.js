import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchWorks } from '../actions'
import httpClient from '../apis/anime'

const WorkList = (props) => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    const getWorks = async () => {
      const response = await httpClient.get('/works')
      setWorks(response.data.works)
    }
    getWorks()
  }, [])

  // console.log(works);

  const renderedWorks = works.map((work) => {
    return (
      <div className='item' key={work.id}>
        <img src={work.images.recommended_url} alt="DDDDD" />
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
