import React from 'react'
import {HorizontalLine, DivWithShadow, InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, MediaContainer} from './InfoSectionLandingThree.elements'
import { ContainerCol,  } from '../../globalStyles'
import { FacebookEmbed, TwitterEmbed, InstagramEmbed } from 'react-social-media-embed';

 const InfoSectionLandingThree = ({ 
    
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
                <Heading>Explore our Network</Heading>
                <ContainerCol>
                     <DivWithShadow>
                        <Subtitle>Facebook</Subtitle>
                        <HorizontalLine/>
                        <MediaContainer>
                            <FacebookEmbed url="https://www.facebook.com/daniellewyatt.turpin/posts/10167681193175634" height={275}/>
                        </MediaContainer>
                        <MediaContainer>
                            <FacebookEmbed url="https://www.facebook.com/daniellewyatt.turpin/posts/10167681193175634" height={275} />
                            </MediaContainer>
                        <MediaContainer>
                            <FacebookEmbed url="https://www.facebook.com/daniellewyatt.turpin/posts/10167681193175634" height={275}/>
                        </MediaContainer>
                     </DivWithShadow>
        
                     <DivWithShadow>
                        <Subtitle>Instagram</Subtitle>  
                        <HorizontalLine/>  
                        <MediaContainer>
                            <InstagramEmbed url="https://www.instagram.com/p/CrvyIOEO5hj/?utm_source=ig_embed&amp;utm_campaign=loading" height={275}/>
                        </MediaContainer>
                        <MediaContainer>
                            <InstagramEmbed url="https://www.instagram.com/p/CrvyIOEO5hj/?utm_source=ig_embed&amp;utm_campaign=loading" height={275}/>
                        </MediaContainer>
                        <MediaContainer>
                            <InstagramEmbed url="https://www.instagram.com/p/CrvyIOEO5hj/?utm_source=ig_embed&amp;utm_campaign=loading" height={275}/>
                        </MediaContainer>            
                     </DivWithShadow>

                     <DivWithShadow>
                        <Subtitle>Twitter</Subtitle> 
                        <HorizontalLine/>
                        <MediaContainer>
                            <TwitterEmbed url="https://twitter.com/carecoops/status/1654451469427388416?ref_src=twsrc%5Etfw" height={275}/>
                        </MediaContainer>
                        <MediaContainer>
                            <TwitterEmbed url="https://twitter.com/carecoops/status/1654451469427388416?ref_src=twsrc%5Etfw" height={275}/>
                        </MediaContainer>
                        <MediaContainer>
                            <TwitterEmbed url="https://twitter.com/carecoops/status/1654451469427388416?ref_src=twsrc%5Etfw" height={275}/>
                        </MediaContainer>
                     </DivWithShadow>
                </ContainerCol>
            </InfoSec>
        </>
    )
}

export default InfoSectionLandingThree;