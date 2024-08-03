import styled from 'styled-components'
export const LoginContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: blue;
  `
  export const LoginFormContainer=styled.div`
   display: flex;
  flex-direction: column;
  width: 35%;
  min-height: 60vh;

  border-radius: 10px;
  padding:10px;
  border:50pxpx;
margin-bottom:80px;
  margin-top:80px;
  box-shadow: 0px 0px 1px 1px #ffffff;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  @media screen and (max-width: 575px) {
    width: 80%;
  }`

  export const HeadingContainer=styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin-bottom: 50px;
  `
  export const Heading =styled.h1`
  width: 25%;
  `
  export const InputLabelContainer=styled.div`
   display: flex;
  flex-direction: column;
  height: 100px;
  padding: 10px;`
  
  export const Label=styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#0f0f0f')};`

  export const InputBox = styled.input`
  border-radius: 5px;
  height: 45px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #94a3b8;
`
export const CheckBoxLabelContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`
export const CheckBox = styled.input`
  margin-top: 5px;
`
export const LoginButton = styled.button`
  margin-top: 50px;
  border: 0px;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 10px;
  color: #ffffff;
  height: 40px;
`
export const ErrorMsg = styled.p`
  color: red;
`
export const ParaElement=styled.p`
color:black;
align-items:center;
 display: flex;
  justify-content: center;

`
export const SignupElement=styled.p`
color:blue
`