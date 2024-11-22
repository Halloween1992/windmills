import styled from "styled-components";

export const HeaderWrapper = styled.section`
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("./assets/image2.jpg");
  background-size: cover;

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: -4rem;

    h2 {
      font-size: 3rem;
      font-weight: 200;
      text-transform: uppercase;
      color: var(--color-brand-700);
    }

    h1 {
      font-size: 6rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: -2rem;
    }
    p {
      font-size: 3rem;
      font-weight: 200;
      margin-top: -2rem;
      text-transform: uppercase;
    }

    button {
      border: 2px solid var(--color-brand-700);
      background-color: transparent;
      border-radius: var(--border-radius-md);
      padding: 1rem 2rem;
      font-weight: 500;
      margin-top: 3rem;
    }
  }
`;
