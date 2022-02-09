import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import form from "./redux/action/index";
import Home from "./Home";

const Api = (props) => {
    console.log("values++++",props.values);
    const dispatch = useDispatch();
    const formToken = useSelector(state => state)

    const [post, setPost] = useState("");
    // const dataValue = {
    //     email: "eve.holt@reqres.in",
    //     password: "cityslicka"
    // }
    useEffect(async () => {

      try {
        await axios.post("https://reqres.in/api/login", props.values)
        .then(async(response) => {
          setPost(response.data);
          // console.log("response>>>>>>>.", response.data)
            console.log(response.data, "jkdbidsgigdi");
            await dispatch(form(response.data));

        })
        
      } catch (error) {
        console.log("User Not Found");
      }

      console.log("post", post);

      
    },[])    
    console.log(post, "post>>>>>");

    // useEffect(async(props) => {
    //   if(props.values.email == "" || props.values.password == ""){
    //     alert("Hello")
    //   }else{
    //     await dispatch(form(post));
        
    //   }
    // },[]);

    return (

      <>
        {/* <div>
          <h1>{post.token}</h1>
        </div> */}
        
        
      </>  
      );
}

export default Api;