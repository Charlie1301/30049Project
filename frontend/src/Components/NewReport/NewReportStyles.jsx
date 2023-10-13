import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`

    min-height: 692px;
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
    188deg,
    rgba(0, 153, 85) 0%,
    rgba(0, 187, 119) 100%
    );

`;

export const Icon = styled(Link)`

    margin-left: 2rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
    margin-top: 1.5rem;

`;

export const Wrapper = styled.div`

    margin-left: 561.594px;
    margin-right: 561.609px;
    margin-top: 15rem;
    height: 25rem;
    width: 40%;
    background: #fff;
    border: none;
    border-radius: 6px;
    position: absolute;

`;

export const UploadWrapper = styled.div`

    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    border: 0.1rem solid;
    border-color: #808080;
    border-radius: 6px;
    position: relative;
    height: 60%;
    text-align: center;

`;

export const Username = styled.div`

    margin-bottom: 2.5rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    float: right;
    margin-right: 2rem;
    margin-top: 1.5rem;

`;

export const Buttons = styled.div`

    font-size: 2rem;
    display: inline;

`;

export const BackButton = styled(Link)`

    text-decoration: none;
    background: linear-gradient(
        188deg,
        rgba(0, 153, 85) 0%,
        rgba(0, 187, 119) 100%
    );
    position: relative;
    color: #000;
    cursor: pointer;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    margin-left: 10rem;

`;

export const AnalysisButton = styled.button`

    text-decoration: none;
    background: linear-gradient(
        188deg,
        rgba(0, 153, 85) 0%,
        rgba(0, 187, 119) 100%
    );
    position: relative;
    color: #000;
    cursor: pointer;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    margin-left: 8rem;

`;

export const P = styled.p`

    font-size: 3rem;

`