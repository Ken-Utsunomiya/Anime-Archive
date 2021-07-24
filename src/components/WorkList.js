import { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
      const response = await httpClient.get(`/works?sort_watchers_count=desc&page=${currentPage}`)
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
        <Grid item key={work.id}>
          <Card id={work.id} title={work.title} image_url={work.images.recommended_url} />
        </Grid>
      )
    })

    return (
      <div className='ui container'>
        <Grid container spacing={2}>
          {renderedWorks}
        </Grid>
        <div>
          <Pagination
            count={Math.ceil(data.total_count / WORKS_PER_PAGE)}
            color="primary"
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
          />
        </div>
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
