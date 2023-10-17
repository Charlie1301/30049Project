import styled from "styled-components";
import { Link } from "react-router-dom";

const bodyColor = "#f3f3fc";
const containerColor = "#010606";
const firstColor = "rgb(0, 187, 119)";
const firstAltColor = "rgb(0, 153, 85)";

export const Container = styled.div`
  min-height: 100vh; 
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
  margin-top: 2rem;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  @media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 2.5rem;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
`;
export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #fff;
`;

export const Button = styled.button`
  background: ${firstColor};
  padding: 1rem 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 1.5rem;
  color: #fff;
  font-size: 0.8rem;
`;