import styled from "styled-components";

export const GalleryWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .top {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    div {
      background-color: red;
      width: 100%;
      height: 350px;
    }

    div:nth-child(1) {
      background: url("./assets/image10.jpg");
      background-size: cover;
    }
    div:nth-child(2) {
      background: url("./assets/image11.png");
      background-size: cover;
    }
    div:nth-child(3) {
      background: url("./assets/image2.jpg ");
      background-size: cover;
    }
  }

  .bottom {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    div {
      background-color: black;
      width: 100%;
      height: 300px;
    }

    div:nth-child(1) {
      background: url("./assets/image5.jpg");
      background-size: cover;
    }
    div:nth-child(2) {
      background: url("./assets/image4.jpg");
      background-size: cover;
    }
    div:nth-child(3) {
      background: url("./assets/image3.jpg");
      background-size: cover;
    }
    div:nth-child(4) {
      background: url("./assets/image1.jpg");
      background-size: cover;
    }
  }
  button {
    border: 2px solid var(--color-brand-700);
    background-color: transparent;
    border-radius: var(--border-radius-md);
    padding: 1rem 2rem;
    font-weight: 500;
    margin: 3rem 0;
  }
`;
