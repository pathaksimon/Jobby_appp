import './index.css'

const Similarjob = props => {
  const {first2} = props

  const {
    location,
    companyLogoUrl,
    employementtype,
    jobDescription,
    title,
    rating,
  } = first2
  return (
    <li className="lista2">
      <div className="inside-1">
        <img src={companyLogoUrl} alt="similar job company logo" />
        <h1>{title}</h1>
        <p>{location}</p>
        <p>{rating}</p>
      </div>

      <div className="inside-2">
        <h1>Description</h1>
        <p>{jobDescription}</p>
        <p>{location}</p>
        <p>{employementtype}</p>
      </div>
    </li>
  )
}

export default Similarjob
