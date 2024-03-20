import React from 'react'
import { useSelector } from 'react-redux'
import { Link ,useNavigate} from 'react-router-dom'


function UserHome() {
  const navigate = useNavigate()
  const authentication_user = useSelector(state => state.authentication_user)
  return (
    <section>
    <div className="row my-4 mx-4">
    <div className="col-md-6 mb-4">
      <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
        <img src="https://reactjs.org/logo-og.png" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
        </a>
      </div>
    </div>
  
    <div className="col-md-6 mb-4">
      <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">{authentication_user.isAuthenticated?<>Welcome Back {authentication_user.name} ! </>:<>Hello Guest User</>}</span>
      <h4><strong>Home Page </strong></h4>
      <p className="text-muted">
      ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is an open-source, component-based front-end library that is responsible only for the view layer of the application. ReactJS is not a framework, it is just a library developed by Facebook to solve some problems that we were facing earlier.
      </p>
      {authentication_user.isAuthenticated?<>
        <Link type="button" className="btn btn-primary" to='/profile'>Go To Profile  ! </Link></>
        :<><Link type="button" className="btn btn-primary" to='/login'> Login To Read More </Link></>}
      
     
    </div>
  </div>

    </section>
  )
}

export default UserHome