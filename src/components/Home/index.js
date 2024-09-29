import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <div className="home-container">
      <Header />
      <div className="sub-container">
        <h1 className="home-heading">Find The Job That Fits your Life</h1>
        <p className="home-description">
          Millions of people searching for a jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <button className="find-button" type="button" onClick={onClickFindJobs}>
          Find Jobs
        </button>
      </div>
    </div>
  )
}

export default Home
