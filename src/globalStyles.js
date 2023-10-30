import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
*::-webkit-scrollbar {
  width: 0.5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 75%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    max-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
  }
`;


export const ContainerInfoCol = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
`;

export const ContainerInfoColMB = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  margin-bottom: 8%;
`;

export const ContainerInfoSub = styled.div`
  
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  @media (min-width: 900px) and (max-width: 12000px) {
    flex-direction: row;
  }

  @media (min-width: 320px) and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const ContainerCol = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 45px;
  padding-right: 45px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (min-width: 900px) and (max-width: 12000px) {
    flex-direction: row;
  }

  @media (min-width: 320px) and (max-width: 950px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  gap: 5%;
`;

export const ContainerNoCap = styled.div`
z-index: 1;
width: 100%;
max-width: 66%;
margin-right: auto;
margin-left: auto;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  margin: auto;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media (min-width: 0px) and (max-width: 768px) {
    margin-bottom: 10%;
  }
`;

export const NavButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 15%;
  &:hover {
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
`;



export default  GlobalStyles;   