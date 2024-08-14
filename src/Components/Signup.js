import { useState } from "react";
import "./Signup.css";

// import Notification from "./Notification/Notification";
import React from "react";
import { Link } from "react-router-dom";
//import Toast from "./Toast";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import UseFetch from "../Api/FetchAPI";


const Signup = () => {

  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  });
    

  //const [showToast, setShowToast] = useState(false);

  
    
  const [custom, setCustom] = useState(false);
  
  // const [showNotification, setShowNotification] = useState(false);
  // const [notificationMsg, setNotificationMsg] = useState('');
  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await UseFetch(`register`, formData);
      console.log("formdata", response);

      if (response.data.status === 201) {
        // setNotificationMsg(response.data.message);
        // setShowNotification(true);

         toast.success(response.data.message, {
           position: toast.POSITION,
           autoClose: 5000,
         });
      }



            if ( response.data.status === 409) {
              // setNotificationMsg(response.data.message);
              // setShowNotification(true);
              toast.error(response.data.message, {
                position: toast.POSITION,
                autoClose: 5000,
              });
            }
      


    } catch (error) {
      
       toast.error("An error occurred. Please try again later.", {
         position: toast.POSITION,
         autoClose: 5000,
       });
      


    }
    }
    
    function changeHandler(event) {
      

      const { name, value } = event.target;

      setFormData((prev) => {
        return { ...prev, [name]: value };
      });

      if (
        value === "custom" ||
        value === "wish me happy birthday" ||
        value === "I wish them happy birthday" ||
        value === "they  wish me happy birthday"
      ) {
        setCustom(true);
      } else {
        setCustom(false);
      }
    }

    return (
      <div>
        {/* {showNotification && <Notification message={notificationMsg} />} */}

        
        <div className="wholePageCssClass">
          <div className="wholeFormClass">
            <div className="headerClass">
              <h3>create a school App account</h3>
              <p>it's quick & easy</p>
            </div>
            <form onSubmit={submitHandler} method="post">
              <div className="nameClass">
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  placeholder="surname"
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="name"
                  onChange={changeHandler}
                />
              </div>
              <div className="emailToPassword">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="phone"
                  onChange={changeHandler}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="password"
                  onChange={changeHandler}
                />
              </div>
              <div className="dateOfBirthClass">
                <label>Date of birth</label>
                <div className="dateOfbirthInputClass">
                  <input
                    type="number"
                    // id="day"
                    name="day"
                    min="1"
                    max="31"
                    value={formData.day}
                    onChange={changeHandler}
                  />
                  <select
                    name="month"
                    value={formData.month}
                    onChange={changeHandler}
                  >
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>

                  <input
                    type="number"
                    // id="year"
                    name="year"
                    min="1900"
                    max="2100"
                    value={formData.year}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="genderClass">
                <label>Gender</label>
                <div className="genderInputClass">
                  <div className="checkboxAbsoluteClass">
                    <input
                      type="text"
                      placeholder="male"
                      readOnly
                      className="inputGenderClass"
                    />
                    <input
                      className="inputCheckBoxClass"
                      type="checkbox"
                      name="gender"
                      value="male"
                      onChange={changeHandler}
                      checked={formData.gender === "male"}
                    />
                  </div>
                  <div className="checkboxAbsoluteClass">
                    <input
                      type="text"
                      placeholder="female"
                     readOnly
                      className="inputGenderClass"
                    />
                    <input
                      className="inputCheckBoxClass"
                      type="checkbox"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={changeHandler}
                    /> 
                  </div>
                  <div className="checkboxAbsoluteClass">
                    <input
                      type="text"
                      placeholder="custom"
                      readOnly
                      className="inputGenderClass"
                    />
                    <input
                      className="inputCheckBoxClass"
                      type="checkbox"
                      name="gender"
                      onChange={changeHandler}
                      value="custom"
                      checked={
                        formData.gender === "custom" ||
                        formData.gender === "wish me happy birthday" ||
                        formData.gender === "I wish them happy birthday" ||
                        formData.gender === "they  wish me happy birthday"
                      }
                    />
                  </div>
                </div>
              </div>
              {custom && (
                <select
                  className="selectCustomGenderClass"
                  name="gender"
                  value={formData.gender}
                  onChange={changeHandler}
                >
                  <option value=" --select your pronoun--">
                    select your pronoun
                  </option>
                  <option value="wish me happy birthday">
                    wish me happy birthday
                  </option>
                  <option value="I wish them happy birthday">
                    I wish them happy birthday
                  </option>
                  <option value="they  wish me happy birthday">
                    wish me happy birthday
                  </option>
                </select>
              )}

              <p className="signupContentClass">
                By clicking Sign Up, you agree to our
                <span className="linkClass"> Terms, Privacy Policy</span> and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
              <div className="buttonParentClass">
                <button className="buttonClass" onSubmit={submitHandler}>
                  Signup
                </button>
              </div>
               <ToastContainer /> 
              <div className="loginPageRedirectClass">
                <p>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Already have an account?
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* {showNotification && <Notification message={notificationMsg} />} */}
      </div>
    );
};

export default Signup;
