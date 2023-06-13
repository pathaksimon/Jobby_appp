import './index.css'
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

const Depthdescription = props => {
  const {first1} = props
  const {
    companyLogoUrl,
    employementType,
    title,
    rating,
    location,
    packagePerAnnum,
    jobDescription,
    id,
  } = first1
  return (
    <Link className="underline" to={`/jobs/${id}`}>
      <li className="cards">
        <div className="margin-card">
          <div className="inside-first">
            <div className="inside-of-inside1">
              <div className="i1">
                <img
                  src={companyLogoUrl}
                  alt="job details company logo"
                  className="company-logo"
                />
              </div>
              <div className="i2">
                <h1>{title}</h1>
                <AiFillStar className="star-icon" />
                <p>{rating}</p>
              </div>
            </div>
            <div className="inside-of-inside2">
              <div className="o1">
                <p>{location}</p>
                <p>{employementType}</p>
              </div>
              <div className="o2">{packagePerAnnum}</div>
            </div>
          </div>
          <hr />
          <div className="inside-second">
            <h1>Description</h1>
            <p className="description-para">{jobDescription}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default Depthdescription
