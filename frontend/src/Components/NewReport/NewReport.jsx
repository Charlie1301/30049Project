import React, {useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

import {

    Container,
    Icon,
    Username,
    Wrapper,
    UploadWrapper,
    Buttons,
    BackButton,
    AnalysisButton,
    P

} from "./NewReportStyles.jsx";

const NewReport = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState('')

    const location = useLocation()

    const handleFile = (event) => {

        if (".sol" in event.target.files[0].name) {

            setFile(event.target.files[0])

        }

    }
    
    const handleSubmit = () => {

        const formData = new FormData()

        formData.append('file', file)

        axios.post("http://localhost:8081" + location.pathname, file)
        
        .then(res => {

            if (res.data[0] == "Success") {

                navigate("/dashboard/" + res.data[1])

            } else {

                alert("Report upload failed, please try again")

            }

        })

    }

    return (

        <>
        
            <Container>

                <div>

                    <Icon to="/">FOO</Icon>
                    <Username>Currently logged in as - John Doe</Username>

                </div>

                <Wrapper>

                    <form onSubmit={handleSubmit}>

                        <UploadWrapper>

                            <P>drag files or choose them directly</P>

                            <input type="file" name='file' onChange={handleFile}/>
                        
                        </UploadWrapper>

                        <Buttons>

                            <BackButton to="/dashboard/2">Back</BackButton>

                            <AnalysisButton type="submit">Begin Analysis</AnalysisButton>
                            

                        </Buttons>

                    </form>

                </Wrapper>

            </Container>

        </>

    );

};

export default NewReport;