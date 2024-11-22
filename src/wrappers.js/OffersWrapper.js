import styled from "styled-components";

export const OfferWrapper = styled.section`
  padding: 10rem;
  max-width: 1400px;
  margin: 0 auto;

  .header {
    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      color: var(--color-brand-800);
    }
  }

  .offers {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1f1;
    gap: 4rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      text-align: center;
      line-height: 3rem;
      svg {
        font-size: 8rem;
        color: var(--color-brand-800);
      }
    }
  }
`;
