import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 40% 1fr 1fr;

  .map {
    height: 500px;
  }

  .contact {
    background-color: var(--color-brand-800);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    height: 500px;
    padding: 2rem 6rem;

    h1 {
      font-size: 6rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
    .address-top {
      background-color: var(--color-brand-700);
      padding: 2rem 2rem;
      margin-bottom: 2rem;
      font-weight: 500;

      span:first-child {
        border-right: 2px solid #fff;
      }
      span {
        padding: 1rem 2rem;
      }
    }

    .address {
      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
    }

    h2 {
      color: #000;
    }
    h3 {
      font-size: 5rem;
      font-weight: 600;
    }
  }

  .contactForm {
    background-color: var(--color-bg);
    height: 500px;
    padding: 4rem 6rem;
    color: #fff;
    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      color: var(--color-brand-800);
    }

    form {
      margin: 2rem 0;

      input,
      textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #000;
        resize: none;
        margin-top: 1rem;
        padding: 1rem 0;
      }

      input:focus,
      textarea:focus {
        border-bottom: 1px solid #000;
        outline: none;
      }

      input[type="text"],
      input[type="tel"] {
        width: 50%;
      }

      input[type="email"],
      textarea {
        width: 100%;
      }
      button {
        padding: 1rem 3rem;
        background-color: #000;
        outline: 0;
        border: 0;
        margin-top: 2rem;
      }
    }
  }

  .copyWrite {
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: var(--color-bg);
    grid-column: 1 / -1;
  }
`;
