import { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import httpClient from '../apis/anime'
import { WORKS_PER_PAGE } from '../constants'
import Card from './Card'
import LoadingCircle from './Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      justifyContent: "center",
      display: 'flex',
    }
  },
}))

const WorkList = () => {
  const [data, setData] = useState({})
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const classes = useStyles()

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
          <Link to={`/works/${work.id}`}>
            <Card title={work.title} image_url={work.images.recommended_url} />
          </Link>
        </Grid>
      )
    })

    return (
      <div className='ui container' style={{ marginBottom: "2rem" }}>
        <Grid container spacing={3} style={{ margin: "4rem 0 2rem 0" }}>
          {renderedWorks}
        </Grid>
        <div>
          <Pagination
            className={classes.root}
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
      <div style={{ position: 'relative' }}>
        <LoadingCircle />
      </div>
    )
  }
}

export default WorkList
