import { useEffect, useState } from "react"

import httpClient from "../apis/anime"
import LoadingCircle from "./Loading"

const Work = (props) => {
  const [work, setWork] = useState({
    data: null,
    episodes: []
  })
  const work_id = props.match.params.id

  useEffect(() => {
    const getWork = async () => {
      let response = await httpClient.get(`/works?filter_ids=${work_id}`)
      let data = response.data.works[0]
      let episodes = []
      if (!data.no_episodes) {
        response = await httpClient.get(`/episodes?per_page=50&filter_work_id=${work_id}`)
        episodes = response.data.episodes
      }
      setWork({ data, episodes })
    }
    getWork()
  }, [work_id])

  const renderedEpisodes = work.episodes.map((episode) => {
    return (
      <div className="ui item" key={episode.id}>
        {episode.title}
      </div>
    )
  })

  const renderedWork = () => {
    if (work.data) {
      return (
        <div className='ui content'>
          <p>{work.data.title}</p>
          <img src={work.data.images.recommended_url} alt='NO IMAGES' />
          <div>
            {renderedEpisodes}
          </div>
        </div>
      )
    } else {
      return (
        <div style={{ position: 'relative' }}>
          <LoadingCircle />
        </div>
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
