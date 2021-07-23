import { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab'

import httpClient from '../apis/anime'
import { WORKS_PER_PAGE } from '../constants'
import Card from './Card'

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
          <Card id={work.id} title={work.title} />
        </div>
      )
    })

    return (
      <div>
        <div className='ui celled list'>
          {renderedWorks}
        </div>
        <Pagination
          count={Math.ceil(data.total_count / WORKS_PER_PAGE)}
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
