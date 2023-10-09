import React from 'react'
import {WellbeingImg, MentalImg, PhysicalImg, AutoDiv, DivWithShadow, Body, Header, InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, SubtitleInfo, ImgWrapper, Img, ImgIcon, HorizontalLine} from './InfoSectionLandingTwo.elements'
import { Container, Button, ContainerCol, ContainerInfoCol, ContainerInfoSub } from '../../globalStyles'
import { Link } from 'react-router-dom'
import one from "../../images/iconOne.png"
import two from "../../images/iconTwo.png"
import three from "../../images/iconThree.png"
import mentalimg from "../../images/mental-img.png"
import physicalimg from "../../images/physical-img.PNG"
import wellbeingimg from "../../images/wellbeing-img.PNG"

const InfoSectionLandingTwo = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                        <HorizontalLine />
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        <HorizontalLine />
                        </InfoColumn>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/sign-up'>
                            </Link>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>

                <ContainerInfoCol>
                    <DivWithShadow>
                        <ImgWrapper start={start}>
                        <ImgIcon src={one} alt="Image 1" />
                        </ImgWrapper>
                        <Heading>Mental Health Support</Heading>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Remember, you are never alone in your journey to better mental health.</p>
                    </DivWithShadow>

                    <ContainerInfoSub>
                        <SubtitleInfo>The Virtual Care Network has recognized the immense stress and emotional toll experienced by healthcare workers on the frontlines. Healthcare workers can access the VCN services without fear of stigma, ensuring their emotional well-being is prioritized.</SubtitleInfo>
                        <ImgWrapper start={start}>
                            <MentalImg src={mentalimg} alt="Image 1" />
                        </ImgWrapper>
                    </ContainerInfoSub>
                    <AutoDiv>
                        <Link to='/health'>
                                <Button big fontBig primary={primary}>
                                        Mental Health Support
                                </Button>
                        </Link>
                    </AutoDiv>
                    <DivWithShadow>
                        <ImgWrapper start={start}>
                            <ImgIcon src={two} alt="Image 2" />
                        </ImgWrapper>
                        <Heading>Physical Support</Heading>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Lean on us for physical support and assistance.</p>
                    </DivWithShadow>

                    <ContainerInfoSub>
                        <ImgWrapper start={start}>
                            <PhysicalImg src={physicalimg} alt="Image 1" />
                        </ImgWrapper>
                        <SubtitleInfo>By utilizing the Virtual Care Network, healthcare professionals can address their physical health needs effectively, ensuring they stay healthy, resilient, and able to provide optimal care to their patients.</SubtitleInfo>
                    </ContainerInfoSub>

                    <AutoDiv>
                        <Link to='/professional-practice'>
                                <Button big fontBig primary={primary}>
                                        Physical Support
                                </Button>
                        </Link>
                    </AutoDiv>
                    
                    <DivWithShadow>
                        <ImgWrapper start={start}>
                        <ImgIcon src={three} alt="Image 3" />
                        </ImgWrapper>
                        <Heading>Wellbeing</Heading>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Your wellbeing matters, and we are here to support you.</p>
                    </DivWithShadow>

                    <ContainerInfoSub>
                        <SubtitleInfo>Healthcare workers can access a variety of support systems tailored to promote their wellbeing, including mental health check-ins, and resources for stress management and self-care. The VCN allows for flexibility in scheduling, allowing healthcare workers to seek support at their convenience, even during irregular hours or busy shifts.</SubtitleInfo>
                        <ImgWrapper start={start}>
                            <WellbeingImg src={wellbeingimg} alt="Image 1" />
                        </ImgWrapper>
                    </ContainerInfoSub>

                    <AutoDiv>
                        <Link to='/wellbeing'>
                                <Button big fontBig primary={primary}>
                                        Wellbeing Support
                                </Button>
                        </Link>
                    </AutoDiv>
                </ContainerInfoCol>
            </InfoSec>
        </>
    )
}

export default InfoSectionLandingTwo;