import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

const Display = () => {
    const [output, setOutput] = useState()
    const {variable, setVariable} = useParams()
    const {number, setNumber} = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${variable}/${number}`)
            .then(
                res=>{
                    console.log(res.data)
                    setOutput(res.data)
            })
            .catch(err=> console.log(err))
    }, [variable, number])


    return (
        <fieldset>
            {
                output?
                <div>
                    <h1>{output.name}</h1>
                    <ul>
                        <li>Height: {output.height} cm</li>
                        <li>Mass: {output.mass} kg</li>
                        <li>Skin Color: {output.skin_color}</li>
                        <li>Hair Color: {output.hair_color}</li>
                    </ul>
                </div>
                :
                <h1>Obi wans face</h1>
            }
        </fieldset>
    )
}

export default Display