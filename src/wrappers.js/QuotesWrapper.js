import styled from "styled-components";

export const QuoteWrapper = styled.section`
  height: 400px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("./assets/image3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 60rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    display: block;
    color: var(--color-brand-800);
    font-size: 10rem;
  }
  p {
    font-size: 2rem;
  }
`;
