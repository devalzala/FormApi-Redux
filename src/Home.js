import React from "react";
import { useSelector } from "react-redux";

const Home = (props) => {
    const select = useSelector(state => state.formReducer)
    console.log("select", select);
    return(
        <>
            {/* <h1>Hi I am homepage</h1> <br/> */}
            {/* <p>{value}</p> */}
            <h2>Token value of API:{select && select?.formValues[0]?.token }</h2>
        </>
    )
}

export default Home;