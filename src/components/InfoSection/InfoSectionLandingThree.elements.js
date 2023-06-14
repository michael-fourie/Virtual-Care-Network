import styled from 'styled-components';


export const InfoSec = styled.div`
    color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
    background-image: radial-gradient(circle, #ffffff, #fdfcff, #fbfaff, #f9f7ff, #f7f4ff);
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    max-width: 70%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;  
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  margin: auto;
  padding-right: 0;
  border: 0;
  max-width: 45%;
  vertical-align: middle;
  display: inline-block;
`;

export const ImgIcon = styled.img`
  margin: auto;
  padding-right: 0;
  border: 0;
  max-width: 100px;
  vertical-align: middle;
  display: inline-block;
`;

export const HorizontalLine = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 1px;
  background-color: #62658a;
  margin-bottom: 4%;
  margin-top: 1%;
  border-radius: 5px;

  `;


export const Heading = styled.h1`
  margin-bottom: 5%;
  line-height: 1.1;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  @media (min-width: 480px) and (max-width: 1200px) {
    font-size: 45px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;
export const MediaContainer = styled.div`
  margin: auto;
  margin-bottom: 6%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const DivWithShadow = styled.div`
  padding: 20px;
  background-color: white;
  margin-bottom: 8%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 20px;
  height: fit-content;
  background: #FFF;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h2`
  margin-top: 10px;
`;

export const Body = styled.p`
  margin-top: 5px;
`;