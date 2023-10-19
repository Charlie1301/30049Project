import React from "react"
import {useLocation} from 'react-router-dom'

const ReportAnalysis = () => {

    path = useLocation().pathname

    const [nameDateVariables, setNameDateVariables] = useState()

    axios.get("http://localhost:8081" + path + "name_date")
    
    .then(res => setNameDateVariables(res.data))
    .catch(err => console.log(err));

    const [errorPositionVariables, setErrorPositionVariables] = useState()

    axios.get("http://localhost:8081" + path + "error_position")

    .then(res => setErrorPositionVariables(res.data))
    .catch(err => console.log(err));

    return (

        <>
        
            <p>ReportAnalysis</p>

        </>

    );

}

export default ReportAnalysis