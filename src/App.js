import { useState } from "react";
import './App.scss';
// import axios from "axios";
import FormInput from "./components/FormInput";
import Api from "./Api";
import { Link} from "react-router-dom"
// import axios from "axios";

const App = () => {

  

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isApicall,setIsApiCall] = useState(false);

  

  const inputs = [
      
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsApiCall(true);
   
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(">>>>>>>>>>>>>>>>>>+++", values);
  return (
  <>
    <div className="apphome">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      <button><Link to="/home">Home</Link></button>

     {
       isApicall === true && <Api values = {values}/>   } 
    </div>
  </>  
  );
};

export default App;