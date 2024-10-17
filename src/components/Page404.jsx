import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa; /* Light background color */
  color: #343a40; /* Dark text color */
  font-family: "Arial", sans-serif; /* Font style */
`;

const Title = styled.h1`
  font-size: 100px; /* Large title */
  font-weight: bold;
  margin: 0;
`;

const Message = styled.p`
  font-size: 20px; /* Message size */
  margin: 20px 0; /* Space around the message */
`;

const Link = styled.a`
  text-decoration: none; /* Remove underline */
  font-size: 18px; /* Link size */
  color: #007bff; /* Link color */
  transition: color 0.3s; /* Smooth transition on hover */

  &:hover {
    color: #0056b3; /* Darker shade on hover */
  }
`;

const Page404 = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <Link href="/">Go back to Home</Link>
    </NotFoundContainer>
  );
};

export default Page404;
