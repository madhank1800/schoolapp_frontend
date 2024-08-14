//import React from 'react'
import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import { Buffer } from "buffer";
const TeacherHome = () => {
     
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
 });

 console.log("studentUpload", studentUpload);

 const handleFileChange = (event) => {
   setStudentUpload((prevFormData) => ({
     ...prevFormData,
     photo: event.target.files[0],
   }));
 };

 const submitHandler = async (event) => {
   event.preventDefault();
   const { photo, student, RollNo, classRoom } = studentUpload;
   const formData = new FormData();
   formData.append("photo", photo);
   formData.append("student", student);
   formData.append("RollNo", RollNo);
   formData.append("classRoom", classRoom);
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

   setStudentUpload((prevFormData) => ({
     ...prevFormData,
     [name]: value,
   }));
 };
 //  const [image, setImage] = useState("");

 const attendance = async () => {
   const response = await axios.get(
     `http://localhost:8000/api/student/allStudentsByClassName/10`,
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
      <div>
       
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="student"
          placeholder="student"
          value={studentUpload.student}
          onChange={handleChange}
        />
        <input
          type="text"
          name="RollNo"
          placeholder="roll no"
          value={studentUpload.RollNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="classRoom"
          placeholder="class"
          value={studentUpload.classRoom}
          onChange={handleChange}
        />
        <input type="file" name="photo" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

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
    </div>
  );
}


export default TeacherHome;