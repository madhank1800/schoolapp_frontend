
//import React from 'react';
import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import { Buffer } from "buffer";
import './AddStudent.css';
import ClassIcon from "@mui/icons-material/Class";
import Paper from "@mui/material/Paper";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";

import EmailIcon from "@mui/icons-material/Email";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: "#333A73", // Change color when input is focused
    borderBottom: "5px solid #333A73",
    width: "300px",

    borderTopRightRadius: "8px",
    "& .MuiInputBase-input": {
      width: "250px", // Set your desired width here
    },
    "& .MuiRadio-root": {
      fontSize: "10px",
    },
    "& .MuiRadioGroup-row": {
      fontSize: "10px",
    },
  },
  radioLabel: {
    fontSize: "0.5rem",
    lineHeight: "0.8rem",
    "& .MuiSvgIcon-root": {
      fontSize: 15,
    },
    "& .Mui-checked": {
      color: "#333A73",
    },
    "& .MuiTypography-root": {
      // Style for the FormControlLabel value
      fontSize: "0.9rem", // Adjust the font size of the value
    },
  },
}));




const AddStudent = () => {

  const classes = useStyles();
  
 const { globalState } = useContext(MyContext);

 console.log("globalState", globalState.token);

 const [attend, setAttend] = useState("");

 const [isAttend, issetAttend] = useState(false);
 console.log("attend", attend);
    console.log("setattend", isAttend);
    
    
 const [studentUpload, setStudentUpload] = useState({
   student: "",
   RollNo: "",
   classRoom: "",
   attendance: "",
   progressCard: "",
   photo: "",
   gender: '',
   email:''
 });

  
  const [isFocused, setIsFocused] = useState({
    student: false,
    RollNo: false,
    classRoom: false,
    photo: false,
    gender: false,
    email:false
  });
   // const [inputValue, setInputValue] = useState("");

  const handleFocus = (event) => {
  
   let name= event.target.name;
    setIsFocused((prev) => {
        return {...prev,[name]:true}
      });
    };

    const handleBlur = (event) => {
      
   let name = event.target.name;
   setIsFocused((prev) => {
     return { ...prev, [name]: false };
   });
    };
  
  
    console.log("studentUpload", studentUpload);
     const handleFileChange = (event) => {
       setStudentUpload((prevFormData) => ({
         ...prevFormData,
         photo: event.target.files[0],
       }));
     };
const submitHandler = async (event) => {
  event.preventDefault();
  const { photo, student, RollNo, classRoom,email } = studentUpload;
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("student", student);
  formData.append("RollNo", RollNo);
  formData.append("classRoom", classRoom);
  formData.append("email", email);
  console.log("formDAta", formData);

  try {
    //let BaseURL = "http://localhost:8080/api/studet/create";
    const response = await axios.post(
      `http://localhost:8000/api/student/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${globalState.token}`,
        },
      }
    );
    console.log("response", response);
  } catch (error) {
    console.log(error);
  }
    };
    
    const handleChange = (event) => {
      const { name, value } = event.target;
//setInputValue(event.target.value);
      setStudentUpload((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

     const attendance = async () => {
       const response = await axios.get(
         `http://localhost:8000/api/student/allStudentsByClassName/8`,
         {
           headers: {
             "Content-Type": "multipart/form-data",
             authorization: `Bearer ${globalState.token}`,
             responseType: "arraybuffer",
           },
         }
       );

       const attendWithImages = response.data.map((student) => {
         const buffer = Buffer.from(student.photo.data, "binary");
         const base64String = buffer.toString("base64");
         return {
           ...student,
           photo: `data:image/jpeg;base64,${base64String}`,
         };
       });

       setAttend(attendWithImages);

       // const buffer = Buffer.from(response.data[0].photo.data, "binary");

       //             const base64String = buffer.toString("base64");
       //             setImage(`data:image/jpeg;base64,${base64String}`);
       //   console.log("res", response);
       // setAttend(response.data);
       issetAttend(true);
     };

  return (
    <>
      <Paper elevation={1} sx={{ padding: "20px", width: "70%" }}>
        <form onSubmit={submitHandler}>
          {/* <input
          type="text"
          name="student"
          placeholder="student"
          value={studentUpload.student}
          onChange={handleChange}
        /> */}

          {/* <input
          type="text"
          name="RollNo"
          placeholder="roll no"
          value={studentUpload.RollNo}
          onChange={handleChange}
        /> */}

          {/* <input
          type="text"
          name="classRoom"
          placeholder="class"
          value={studentUpload.classRoom}
          onChange={handleChange}
        /> */}

          {/* 
        <input
          type="radio"
          name="gender"
          value="female"
          checked={studentUpload.gender === "female"}
          onChange={handleChange}
        />
        <input type="text" placeholder="female" readOnly /> */}

          {/* 
        <input
          type="radio"
          name="gender"
          value="male"
          checked={studentUpload.gender === "male"}
          onChange={handleChange}
        />
        <input type="text" placeholder="male" readOnly /> */}

          {/* <input
          type="radio"
          name="gender"
          value="other"
          checked={studentUpload.gender === "other"}
          onChange={handleChange}
        /> */}

          {/* <input type="text" placeholder="other" readOnly />
        <input type="file" name="photo" onChange={handleFileChange} />
        <button type="submit">Upload</button> */}
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <FormControl variant="standard">
                <Paper elevation={10}>
                  <InputLabel htmlFor="student-name">student name</InputLabel>
                  <Input
                    id="student-name"
                    name="student"
                    disableUnderline
                    className={classes.paper}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle
                          style={{
                            color:
                              isFocused.student ||
                              studentUpload.student.length >= 1
                                ? "#333A73"
                                : "initial",
                          }}
                        />
                      </InputAdornment>
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={studentUpload.student}
                    onChange={handleChange}
                  />
                </Paper>
              </FormControl>
            </Grid>

            <Grid item sm={6}>
              <FormControl variant="standard">
                <Paper elevation={10}>
                  <InputLabel htmlFor="student-Rollno">Roll No</InputLabel>
                  <Input
                    id="student-Rollno"
                    name="RollNo"
                    disableUnderline
                    className={classes.paper}
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonPinCircleIcon
                          style={{
                            color:
                              isFocused.RollNo ||
                              studentUpload.RollNo.length >= 1
                                ? "#333A73"
                                : "initial",
                          }}
                        />
                      </InputAdornment>
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={studentUpload.RollNo}
                    onChange={handleChange}
                  />
                </Paper>
              </FormControl>
            </Grid>

            <Grid item sm={6}>
              <FormControl variant="standard">
                <Paper elevation={10}>
                  <InputLabel htmlFor="student-class">Class</InputLabel>
                  <Input
                    id="student-class"
                    name="classRoom"
                    disableUnderline
                    className={classes.paper}
                    startAdornment={
                      <InputAdornment position="start">
                        <ClassIcon
                          style={{
                            color:
                              isFocused.classRoom ||
                              studentUpload.classRoom.length >= 1
                                ? "#333A73"
                                : "initial",
                          }}
                        />
                      </InputAdornment>
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={studentUpload.classRoom}
                    onChange={handleChange}
                  />
                </Paper>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl variant="standard">
                <Paper elevation={10}>
                  <InputLabel htmlFor="student-email">email</InputLabel>
                  <Input
                    id="student-email"
                    name="email"
                    disableUnderline
                    className={classes.paper}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon
                          style={{
                            color:
                              isFocused.email || studentUpload.email.length >= 1
                                ? "#333A73"
                                : "initial",
                          }}
                        />
                      </InputAdornment>
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={studentUpload.email}
                    onChange={handleChange}
                  />
                </Paper>
              </FormControl>
            </Grid>

            <Grid item sm={6}>
              <FormControl variant="standard">
                <Paper elevation={10}>
                  <InputLabel htmlFor="student-photo">Photo</InputLabel>
                  <Input
                    id="student-photo"
                    name="photo"
                    type="file"
                    disableunderline
                    className={classes.paper}
                    startAdornment={
                      <InputAdornment position="start">
                        <AddPhotoAlternateIcon
                          style={{
                            color:
                              isFocused.photo && studentUpload.photo
                                ? "#333A73"
                                : "initial",
                          }}
                        />
                      </InputAdornment>
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleFileChange}
                  />
                </Paper>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <Paper elevation={10} className={classes.radioLabel}>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    size="small"
                    style={{ fontSize: "13px" }}
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    disableUnderline
                    size="small"
                    className={classes.paper}
                  >
                    <FormControlLabel
                      name="gender"
                      value="female"
                      control={<Radio />}
                      label="Female"
                      // checked={studentUpload.gender}
                      onChange={handleChange}
                      className={classes.radioLabel}
                    />
                    <FormControlLabel
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      control={<Radio />}
                      label="Male"
                      className={classes.radioLabel}
                    />
                    <FormControlLabel
                      name="gender"
                      value="other"
                      onChange={handleChange}
                      control={<Radio />}
                      label="Other"
                      className={classes.radioLabel}
                    />
                  </RadioGroup>
                </Paper>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <button type="submit">Upload</button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <div>
        <button onClick={attendance}>online attendance by class</button>
      </div>

      {isAttend && (
        <div>
          {attend.map((item, index) => (
            <div key={index}>
              <p>Roll No: {item.RollNo}</p>
              <p>Class Room: {item.classRoom}</p>
              {/* <img
                src={`data:image/png;base64,${Buffer.from(
                  item.photo.data
                ).toString("base64")}`}
                alt={`Image ${index + 1}`}
              /> */}
              <img src={item.photo} alt="hx" />
              <p>Student: {item.student}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AddStudent