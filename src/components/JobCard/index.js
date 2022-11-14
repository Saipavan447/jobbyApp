import {Link} from 'react-router-dom'
import {BsBag} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import './index.css'

const JobCard = props => {
  const {eachJobDetails} = props
  const {
    jobDescription,
    companyLogo,
    location,
    package1,
    rating,
    title,
    eType,
    jobId,
  } = eachJobDetails
  return (
    <Link to={`/jobs/${jobId}`} className="Link1">
      <li className="job-card">
        <div className="top-card">
          <img src={companyLogo} alt="company logo" className="company-logo" />
          <div className="title">
            <h1 className="title-font">{title}</h1>
            <div className="row">
              <p className="rating">
                <AiFillStar className="star" />
                {rating}
              </p>
            </div>
          </div>
        </div>
        <div className="font-cont">
          <div className="row">
            <div>
              <p className="fonts">
                <GoLocation className="font" />
                {location}
              </p>
            </div>
            <div>
              <p className="fonts">
                <BsBag className="font" /> {eType}
              </p>
            </div>
          </div>
          <div className="package">{package1}</div>
        </div>
        <hr className="line-job" />
        <h1 className="des-name">Description</h1>
        <p className="job-para">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
