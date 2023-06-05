import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSectionLanding.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

 const InfoSectionLanding = ({ 
    
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
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline} 
                                <TypeAnimation
                                    sequence={[
                                        // Same String at the start will only be typed once, initially
                                        'Mental Health',
                                        1000,
                                        'Physical Health',
                                        1000,
                                        'Wellbeing',
                                        1000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSectionLanding;