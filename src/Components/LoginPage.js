
import * as React from 'react'
//import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import UseFetch from '../Api/FetchAPI';
import { Grid } from "@mui/material";
import { useContext } from 'react';
import { MyContext } from '../MyContext';

//import { makeStyles } from "@mui/styles";
// import styled from "styled-components";
//import { makeStyles } from "@material-ui/core/styles";
 
// const StyledButton = styled(Button)`
//   background-color: orange;
//   color: white;
// `;

const LoginPage = () => {

 
   const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [formData, setFormData] = React.useState({
    email: '',
    password:''
  })


  const { globalState, setGlobalState } = useContext(MyContext);
  console.log("set", setGlobalState);
      console.log("token", globalState);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



    console.log(formData);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {...prev,[name]:value}
    })
    console.log(formData);
}

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await UseFetch(`login`, formData);
    console.log(response);
  
    await setGlobalState((prev) => {
      return { ...prev, token: response.data.token, role: response.data.role };
    });
  
      if (response.data.role === "student") {
       navigate("/home");
      } else if (response.data.role === "teacher") {
     navigate("/home");
      }
}

  return (
    <>
      <Grid container spacing={2}>
      
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",

            width: "100%",
          }}
        ><Grid item xs={12} sm={6} md={6} style={{ height: '100%' }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <form onSubmit={submitHandler}>
              <FormControl
                sx={{
                  m: 1,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-email">
                  email
                </InputLabel>
                <Input
                  sx={{ width: "300px" }}
                  id="standard-adornment-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
              </FormControl>
              <FormControl
                sx={{ m: 1, display: "flex", flexDirection: "row" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  sx={{ width: "300px" }}
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  autoComplete="true"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                sx={{ backgroundColor: "orange", width: "150px" }}
                onClick={submitHandler}
              >
                Login
              </Button>
            </form>
              </Box>
            </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ height: '100%' }}>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
                  width: "100%",
              
              backgroundColor: "orange",height:"100%"
            }}
          >
            
              </Box>
              </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default LoginPage