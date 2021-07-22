import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import httpClient from '../apis/anime'
import { Pagination } from '@material-ui/lab'

const WorkList = () => {
  const [data, setData] = useState({})
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getWorks = async () => {
      setLoading(true)
      const response = await httpClient.get(`/works?sort_id=asc&page=${currentPage}`)
      setData(response.data)
      setWorks(response.data.works)
      setCurrentPage(currentPage)
      setLoading(false)
    }

    getWorks()
  }, [currentPage])

  if (!loading) {
    const renderedWorks = works.map((work) => {
      return (
        <div className='item' key={work.id}>
          <Link to={`/works/${work.id}`} >{work.title}</Link>
        </div>
      )
    })

    return (
      <div>
        <div className='ui celled list'>
          {renderedWorks}
        </div>
        <Pagination
          count={Math.ceil(data.total_count / 25)}
          color="primary"
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
        />
      </div>
    )
  } else {
    return (
      <div>
        Loading....
      </div>
    )
  }
}

export default WorkList
