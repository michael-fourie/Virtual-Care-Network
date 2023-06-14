import React from 'react'
import {DivWithShadow, Body, Header, InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, ImgIcon, HorizontalLine} from './InfoSectionLandingTwo.elements'
import { Container, Button, ContainerCol } from '../../globalStyles'
import { Link } from 'react-router-dom'
import one from "../../images/iconOne.png"
import two from "../../images/iconTwo.png"
import three from "../../images/iconThree.png"

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
                <ContainerCol>
                    <DivWithShadow>
                        <ImgWrapper start={start}>
                        <ImgIcon src={one} alt="Image 1" />
                        </ImgWrapper>
                        <Heading>Mental Support</Heading>
                        <Subtitle>The Virtual Care Network has recognized the immense stress and emotional toll experienced by healthcare workers on the frontlines. Healthcare workers can access the VCN services without fear of stigma, ensuring their emotional well-being is prioritized.</Subtitle>
                        <Link to='/mental'>
                            <Button big fontBig primary={primary}>
                                    More
                            </Button>
                        </Link>
                    </DivWithShadow>
                    <DivWithShadow>
                        <ImgWrapper start={start}>
                        <ImgIcon src={two} alt="Image 2" />
                        </ImgWrapper>
                        <Heading>Physical Support</Heading>
                        <Subtitle>By utilizing the Virtual Care Network, healthcare professionals can address their physical health needs effectively, ensuring they stay healthy, resilient, and able to provide optimal care to their patients.</Subtitle>
                        <Link to='/physical'>
                            <Button big fontBig primary={primary}>
                                    More
                            </Button>
                        </Link>
                    </DivWithShadow>
                    <DivWithShadow>
                        <ImgWrapper start={start}>
                        <ImgIcon src={three} alt="Image 3" />
                        </ImgWrapper>
                        <Heading>Wellbeing</Heading>
                        <Subtitle>Healthcare workers can access a variety of support systems tailored to promote their wellbeing, including mental health check-ins, and resources for stress management and self-care. The VCN allows for flexibility in scheduling, allowing healthcare workers to seek support at their convenience, even during irregular hours or busy shifts.</Subtitle>
                        <Link to='/wellbeing'>
                            <Button big fontBig primary={primary}>
                                    More
                            </Button>
                        </Link>
                    </DivWithShadow>
                </ContainerCol>
            </InfoSec>
        </>
    )
}

export default InfoSectionLandingTwo;