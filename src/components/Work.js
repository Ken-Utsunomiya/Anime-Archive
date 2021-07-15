import { useEffect, useState } from "react"
import httpClient from "../apis/anime"

const Work = ({ id }) => {
  const [work, setWork] = useState(null)

  useEffect(() => {
    const getWork = async () => {
      const response = await httpClient.get(`/works?filter_ids=${id}`)
      setWork(response.data.works[0])
    }
    getWork()
  })

  return (
    <div>
      {work.title}
    </div>
  )
}

export default Work
