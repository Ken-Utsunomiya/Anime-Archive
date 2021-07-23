import { Link } from 'react-router-dom'

const Card = ({ id, title }) => {
  return (
    <div className='item' key={id}>
      <Link to={`/works/${id}`} >{title}</Link>
    </div>
  )
}

export default Card
