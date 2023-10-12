import React from "react";

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

    return (

        <>
        
            <Container>

                <div>

                    <Icon to="/">FOO</Icon>
                    <Username>Currently logged in as - John Doe</Username>

                </div>

                <Wrapper>

                    <UploadWrapper>

                        <P>drag files or choose them directly</P>
                    
                    </UploadWrapper>

                    <Buttons>

                        <BackButton to="/dashboard/2">Back</BackButton>

                        <AnalysisButton to="/">Begin Analysis</AnalysisButton>

                    </Buttons>

                </Wrapper>

            </Container>

        </>

    );

};

export default NewReport;