import { useEffect, useState } from "react"

import httpClient from "../apis/anime"

const Work = (props) => {
  const [work, setWork] = useState(null)
  const work_id = props.match.params.id

  useEffect(() => {
    const getWork = async () => {
      const response = await httpClient.get(`/works?filter_ids=${work_id}`)
      setWork(response.data.works[0])
    }
    getWork()
  }, [])

  const renderedWork = () => {
    if (work) {
      return (
        <div className='ui content'>
          <p>{work.title}</p>
          <img src={work.images.recommended_url} alt='NO IMAGES' />
        </div>
      )
    } else {
      return (
        <div>Loading... </div>
      )
    }
  }

  return (
    <div>
      {renderedWork()}
    </div>
  )
}

export default Work
