import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserRegiser() {

const [formError, setFormError] = useState([])  
const navigate = useNavigate(); 
const baseURL='http://127.0.0.1:8000'

const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    setFormError([]);
  
    const formData = new FormData();
    formData.append("first_name", event.target.first_name.value);
    formData.append("email", event.target.email.value);
    formData.append("password", event.target.password.value);
    formData.append("phone_number", event.target.phone_number.value);
  
    try {
      const res = await axios.post(baseURL + '/api/accounts/register/', formData);
      
      if (res.status === 201) {
        navigate('/login', {
          state: res.data.Message,
        });
        return res;
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 406) {
          console.log("Error 406 - Not Acceptable");
          console.log(error.response.data);
          setFormError(error.response.data);
        } else if (error.response.status === 404) {
          console.log("Error 404 - API Not Found");
          // Handle the case when the API is not found
          // For example, you might want to display a user-friendly message to the user
        } else {
          console.log("Other Error");
          console.log(error.response.data);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error setting up the request");
      }
      console.log("Error message:", error.message);
    }
  };
  



  return (
    <section  style={{backgroundColor: "#508bfc"}}>
    <div className="container py-5 ">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
            <div className="card-body p-5 ">
  
              <h3 className="mb-5 text-center">Register Now</h3>
              <form onSubmit={handleRegisterSubmit} method='POST'>

              <div className=" mb-4">
                <input type="text" name='first_name' className="form-control form-control-lg" required />
                <label className="form-label" >Name</label>
              </div>
              <div className=" mb-4">
                <input type="email" id="typeEmailX-2" name='email' className="form-control form-control-lg"  required/>
                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
              </div>

              <div className=" mb-4">
                <input type="text"  className="form-control form-control-lg"  name='phone_number' required/>
                <label className="form-label" >Mobile Number</label>
              </div>
  
              <div className=" mb-4">
                <input type="password" id="typePasswordX-2" className="form-control form-control-lg" name='password' required/>
                <label className="form-label" htmlFor="typePasswordX-2">Password</label>
              </div>
  
  
  
              <button className="btn btn-primary btn-lg btn-block" type="submit">Regiter Now</button>
              </form>

              <ul className='text-danger'>
              {Object.keys(formError).map((key) => (
                formError[key].map((message, index) => (
                  <li key={`${key}_${index}`}>{message}</li>
                ))
              ))}
            </ul>
              
  
              <hr className="my-4"/>
  
              <Link to='/login'>Already Have Account?</Link>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default UserRegiser