import React from 'react'
import {WellbeingImg, MentalImg, PhysicalImg, AutoDiv, DivWithShadow, Body, Header, InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, SubtitleInfo, ImgWrapper, Img, ImgIcon, HorizontalLine} from './InfoSectionLandingTwo.elements'
import { Container, Button, ContainerCol, ContainerInfoCol, ContainerInfoColMB, ContainerInfoSub } from '../../globalStyles'
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
                        <Heading>Preventative Health Support</Heading>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Supporting your health with beneficial resources all in one place</p>
                    </DivWithShadow>
                    <ContainerInfoSub>
                        <ImgWrapper start={start}>
                            <MentalImg src={mentalimg} style={{ marginBottom: '10%' }}alt="Image 1" />
                        </ImgWrapper>

                        <ContainerInfoColMB>
                            <SubtitleInfo>The Virtual Care Network has recognized the immense stress and emotional toll experienced by healthcare workers on the frontlines. Healthcare workers can access the VCN services without fear of stigma, ensuring their emotional well-being is prioritized.</SubtitleInfo>
                            <Link to='/health' style={{ margin: 'auto' }}>
                                    <Button big fontBig primary={primary}>
                                            Preventative Health
                                    </Button>
                            </Link>
                        </ContainerInfoColMB>

                    </ContainerInfoSub>

                    <DivWithShadow>
                        <ImgWrapper start={start}>
                        <ImgIcon src={three} alt="Image 3" />
                        </ImgWrapper>
                        <Heading>Wellbeing</Heading>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Your wellbeing matters, and we are here to support you.</p>
                    </DivWithShadow>
                    <ContainerInfoSub>
                        <ImgWrapper start={start}>
                            <WellbeingImg src={wellbeingimg} alt="Image 1" />
                        </ImgWrapper>
                        <ContainerInfoCol>
                            <SubtitleInfo>Healthcare workers can access a variety of support systems tailored to promote their wellbeing, including mental health check-ins, and resources for stress management and self-care. The VCN allows for flexibility in scheduling, allowing healthcare workers to seek support at their convenience, even during irregular hours or busy shifts.</SubtitleInfo>
                            <Link to='/wellbeing' style={{ margin: 'auto' }}> 
                                <Button big fontBig primary={primary} style={{ margin: 'auto' }}>
                                        Wellbeing Support
                                </Button>
                            </Link>
                        </ContainerInfoCol>
                        
                    </ContainerInfoSub>

                    <DivWithShadow>
                        <ImgWrapper start={start}>
                            <ImgIcon src={two} alt="Image 2" />
                        </ImgWrapper>
                        <Heading>Professional Practice</Heading>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Resources to help guide you to master being a professional, and the challenges that come with it.</p>
                    </DivWithShadow>
                    <ContainerInfoSub>
                        <ImgWrapper start={start}>
                            <PhysicalImg src={physicalimg} alt="Image 1" />
                        </ImgWrapper>
                        <ContainerInfoCol>
                            <SubtitleInfo>By utilizing the Virtual Care Network, healthcare professionals can address their physical health needs effectively, ensuring they stay healthy, resilient, and able to provide optimal care to their patients.</SubtitleInfo>
                            <Link to='/professional-practice' style={{ margin: 'auto' }}>
                                <Button big fontBig primary={primary}>
                                        Physical Support
                                </Button>
                        </Link>
                        </ContainerInfoCol>
                    </ContainerInfoSub>

                    
                </ContainerInfoCol>
            </InfoSec>
        </>
    )
}

export default InfoSectionLandingTwo;