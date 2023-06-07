import styled, { keyframes } from 'styled-components';

// Define the bouncing animation keyframes
const bounceAnimation = keyframes`
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.15) rotate(4deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
`;

export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    @media (min-width: 480px) and (max-width: 1200px) {
      padding: 160px 0;
    }
  
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 60px 0;
    }
    background-image: linear-gradient(
      135deg,
      hsl(247deg 80% 29%) 0%,
      hsl(243deg 40% 53%) 37%,
      hsl(236deg 56% 71%) 60%,
      hsl(230deg 87% 85%) 100%
    );
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 5px;
  padding-right: 5px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#FDF8F0' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  animation: ${bounceAnimation} 3s ease-in-out infinite;
`;

export const Heading = styled.h1`
  /* Media query for mobile devices */
  @media (max-width: 767px) {
    min-height: 280px;
  }

  /* Media query for desktop devices */
  @media (min-width: 768px) {
    min-height: fit-content;
  }
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#FDF8F0' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#FDF8F0' : '#1c2237')};
`;