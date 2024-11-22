import styled from "styled-components";

export const AboutWrapper = styled.section`
  height: 600px;
  max-width: 1400px;
  display: flex;
  padding: 10rem;
  margin: 0 auto;
  gap: 10rem;

  .images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    div {
      background-color: red;
      background-size: cover;
    }

    div:nth-child(1) {
      grid-column: span 3;
      grid-row: 1 / 2;
      width: 250px;
      background: url("./assets/image11.png");
      background-size: cover;
    }

    div:nth-child(2) {
      grid-column: 4 / -1;
      grid-row: 1 / -1;
      height: 200px;
      width: 200px;
      margin-top: 100px;
      background: url("./assets/image8.jpg");
      background-size: cover;
    }

    div:nth-child(3) {
      grid-column: 2 / 4;
      grid-row: 2 / -1;
      height: 150px;
      width: 100%;
      background: url("./assets/image4.jpg");
      background-size: cover;
    }

    img {
      width: 400px;
      height: 400px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      color: var(--color-brand-800);
    }

    p {
      color: #777;

      span {
        font-size: 5rem;
      }
    }

    .sign {
      text-align: center;
      font-size: 2rem;
      margin: 0 auto;
      display: block;
    }
  }
`;
