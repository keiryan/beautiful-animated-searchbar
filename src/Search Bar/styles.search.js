import styled from "styled-components";

export const FormContainer = styled.div`
  color: #fff;
  width: 100%;
  max-width: 600px;
  border-radius: 6px;
  position: relative;
  transition: scale 0.2s ease-in-out;
`;

export const Form = styled.form`
  display: flex;
  padding: 0.6rem 1rem;
  padding-left: 0.2rem;
  background-color: #121B2F;
  width: 100%;
  color: #fff;
  border-radius: ${({ value }) => (value.length === 0 ? "6px" : "6px 6px 0 0")};
  position: relative;
  transition: all 0.2s ease-in-out;
  z-index: 100;
  :active {
    scale: ${({ value }) => (value.length === 0 ? 0.98 : 1)};
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  ::-moz-selection {
    /* Code for Firefox */
    background: #ff87047e;
  }

  ::selection {
    background: #ff87047e;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: calc(100% + 0.45rem);
  height: ${({ value, height }) => (value.length === 0 ? 0 : height + "px")};
  border-radius: 0 0 6px 6px;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #121B2F;
  padding: 4px 6px;
  border-top: 2px solid #272c39;
  opacity: ${({ value }) => (value.length === 0 ? 0 : 1)};
  /* background-color: #121B2F; */
  transition: all 0.3s ease-in-out;
  z-index: 99;
  overflow: auto;
  text-transform: capitalize;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: none;
  }
`;

export const GhostResultContainer = styled(ResultContainer)`
  visibility: hidden;
  pointer-events: none;
  background-color: red;
  transition: none;
  height: auto;
  z-index: 0;
`;

export const NoResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-radius: 6px;
  transition: scale 0.2s ease-in-out;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #272c39;
    cursor: pointer;
  }
  :active {
    scale: 0.98;
  }
  @keyframes rollout {
    0% {
      opacity: 0;
      transform: translateY(4px);
      scaley: 0.8;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
      scaley: 1;
    }
  }
  animation: 0.4s rollout ease-in-out;
`;

const IconContainer = styled.div`
  margin: 0 0.5rem;
`;

export const CoinContainer = styled.div`
  margin-right: 0.5rem;
`;

export function SearchIcon() {
  return (
    <IconContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        strokeWidth="1.6"
        color="#000"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
        ></path>
      </svg>
    </IconContainer>
  );
}

export function Coin() {
  return (
    <CoinContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        strokeWidth="1.6"
        color="#000"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        ></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191 0 3 5.5 1.5 5.5 4.5 0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5"
        ></path>
      </svg>
    </CoinContainer>
  );
}
