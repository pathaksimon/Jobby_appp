import './index.css'

const Skillssection = props => {
  const {herefirst} = props
  const {name, imageUrl} = herefirst
  return (
    <li className="lista1">
      <img src={imageUrl} alt={herefirst.name} />
      <p>{name}</p>
    </li>
  )
}

export default Skillssection
