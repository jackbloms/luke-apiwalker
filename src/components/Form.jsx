import React, {useState} from 'react'
// import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"

const Form = () => {
    const [variable, setVariable] = useState("people")
    const [number, setNumber] = useState("")
    const [output, setOutput] = useState()
    const navigate = useNavigate()

    // const fetchStarWars=()=>{
    //     axios.get(`https://swapi.dev/api/:variable/:number`)
    //         .then(
    //             res=>{
    //                 console.log(res.data)
    //                 setOutput(res.data)
    //         })
    //         .catch(err=> console.log(err))
    // }

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/${variable}/${number}`)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search for:</label>
            <select onChange={(e)=>setVariable(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select> 
            <label>ID: </label>
            <input onChange={(e)=>setNumber(e.target.value)} type="int" name="id" value={number}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Form