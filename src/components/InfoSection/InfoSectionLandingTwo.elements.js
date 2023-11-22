import styled from 'styled-components';


export const InfoSec = styled.div`
    color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
    background-image: linear-gradient(
      330deg,
      hsl(228deg 100% 85%) 0%,
      hsl(229deg 100% 86%) 0%,
      hsl(229deg 100% 88%) 0%,
      hsl(230deg 100% 90%) 1%,
      hsl(230deg 100% 92%) 3%,
      hsl(231deg 100% 93%) 6%,
      hsl(231deg 100% 95%) 14%,
      hsl(232deg 100% 97%) 35%,
      hsl(232deg 100% 98%) 76%,
      hsl(0deg 0% 100%) 100%
    );
`

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

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  margin: auto;
  padding-right: 0;
  border: 0;
  max-width: 45%;
  vertical-align: middle;
  display: inline-block;
`;

export const MentalImg = styled.img`
margin: auto;
padding-right: 0;
border: 0;
max-width: 65%;
vertical-align: middle;
display: inline-block;
border: 2px solid black; /* Border around the image with a thickness of 4px and a black color */
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); /* Strong shadow effect */
@media (min-width: 0px) and (max-width: 768px) {
  max-width: 100%;
}

`;

export const PhysicalImg = styled.img`
margin: auto;
padding-right: 0;
border: 0;
max-width: 65%;
vertical-align: middle;
display: inline-block;
border: 2px solid black; /* Border around the image with a thickness of 4px and a black color */
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); /* Strong shadow effect */
@media (min-width: 0px) and (max-width: 768px) {
  max-width: 100%;
  margin-bottom: 5%;
}

`;


export const WellbeingImg = styled.img`
margin: auto;
padding-right: 0;
border: 0;
max-width: 65%;
vertical-align: middle;
display: inline-block;
border: 2px solid black; /* Border around the image with a thickness of 4px and a black color */
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); /* Strong shadow effect */
@media (min-width: 0px) and (max-width: 768px) {
  max-width: 100%;
}

`;

export const ImgIcon = styled.img`
  margin: auto;
  padding-right: 0;
  border: 0;
  max-width: 25%;
  vertical-align: middle;
  display: inline-block;
`;

export const HorizontalLine = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 2px;
  background-color: #62658a;
  margin-bottom: 4%;
  margin-top: 4%;
  border-radius: 5px;

  `;


export const Heading = styled.h1`
  margin-bottom: 14px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 22px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const SubtitleInfo = styled.p`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 7%;
  font-size: 26px;
  width: 100%;
  color: #1c2237;
  @media (min-width: 0px) and (max-width: 768px) {
    width: 90%;
    font-size: 22px;
  }
`;

export const AutoDiv = styled.div`
  margin: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 8%;
  margin-top: 1%;
`

export const DivWithShadow = styled.div`
  margin: auto;
  padding: 20px;
  background-color: white;
  margin-bottom: 4%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 30px;
  background: rgb(237,237,237);
  background: linear-gradient(180deg, rgba(237,237,237,1) 0%, rgba(255,255,255,1) 25%);
  @media (min-width: 1290px) and (max-width: 12000px) {
    height: fit-content;
    width: 20vw;
  }
  @media (min-width: 950px) and (max-width: 1290px) {
    height: fit-content;
    width: 30vw;
  }
  @media (min-width: 0px) and (max-width: 950px) {
    height: fit-content;
    width: 75vw;
  }
`;

export const Header = styled.h2`
  margin-top: 10px;
`;

export const Body = styled.p`
  margin-top: 5px;
`;