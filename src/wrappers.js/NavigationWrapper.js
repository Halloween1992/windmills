import styled from "styled-components";

export const NavigationWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #777;
  color: #fff;

  .logo {
    font-size: 4rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    text-transform: uppercase;
    gap: 2rem;
    letter-spacing: normal;
    font-weight: 500;
    position: relative;

    li {
      display: flex;
      align-items: center;

      .active {
        color: var(--color-brand-700);
      }
    }

    li:not(:last-child)::after {
      content: "";
      height: 5px;
      width: 5px;
      background-color: #fff;
      border-radius: 50%;
      margin-left: 1.5rem;
    }
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
