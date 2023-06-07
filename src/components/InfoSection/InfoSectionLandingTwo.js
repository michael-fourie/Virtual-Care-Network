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
                        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla arcu, at vestibulum lectus. Quisque bibendum mauris non justo aliquet dignissim. Curabitur vulputate urna turpis, nec gravida velit ultricies ac.</Subtitle>
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
                        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla arcu, at vestibulum lectus. Quisque bibendum mauris non justo aliquet dignissim. Curabitur vulputate urna turpis, nec gravida velit ultricies ac.</Subtitle>
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
                        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla arcu, at vestibulum lectus. Quisque bibendum mauris non justo aliquet dignissim. Curabitur vulputate urna turpis, nec gravida velit ultricies ac.</Subtitle>
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