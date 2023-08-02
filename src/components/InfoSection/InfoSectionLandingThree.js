import React from 'react'
import {HorizontalLine, DivWithShadow, InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, MediaContainer} from './InfoSectionLandingThree.elements'
import { Button, ContainerCol,  } from '../../globalStyles'
import { FacebookEmbed, TwitterEmbed, InstagramEmbed } from 'react-social-media-embed';
import {isMobile} from 'react-device-detect';
import { useEffect, useState } from 'react';

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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    let facebookWidth = 0;
    let instagramWidth = 0;
    let twitterWidth = 0;
  
    if (windowWidth >= 1450) {
        facebookWidth = 550;
        instagramWidth = 350;
        twitterWidth = 250;
    } else if (windowWidth >= 951) {
            facebookWidth = 300;
            instagramWidth = 250;
            twitterWidth = 250;
    } else {
        facebookWidth = 275;
        instagramWidth = 275;
        twitterWidth = 275;
    }
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Heading>Explore our Network</Heading>
                <ContainerCol>
                     <DivWithShadow>
                        <Subtitle>Facebook</Subtitle>
                        <HorizontalLine/>
                        <MediaContainer>
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaniellewyatt.turpin%2Fposts%2Fpfbid02Y52KEbB5YFKbJYSZUQRMNWYuuLSRRXnuRPSWf8BSde4YB76gKS9pDFuvBzzLavwQl&show_text=true" width={facebookWidth} height="570" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </MediaContainer>
                        <Button big fontBig primary={primary}>
                            More
                        </Button>
                     </DivWithShadow>
        
                     <DivWithShadow>
                        <Subtitle>Instagram</Subtitle>  
                        <HorizontalLine/>  
                        <MediaContainer>
                            <iframe src="https://www.instagram.com/p/CrvyIOEO5hj/embed/captioned/?cr=1&amp;v=14&amp;wp=652&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A605.2999999970198%2C%22ls%22%3A544.5999999940395%2C%22le%22%3A578.3999999910593%7D" allowtransparency="true" allowfullscreen="true" frameborder="1" width={instagramWidth} height={isMobile ? "400" : "600"} data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" ></iframe>
                        </MediaContainer>
                        <MediaContainer>
                            <iframe src="https://www.instagram.com/p/CrvyIOEO5hj/embed/captioned/?cr=1&amp;v=14&amp;wp=652&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A605.2999999970198%2C%22ls%22%3A544.5999999940395%2C%22le%22%3A578.3999999910593%7D" allowtransparency="true" allowfullscreen="true" frameborder="1" width={instagramWidth} height={isMobile ? "400" : "600"} data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" ></iframe>
                        </MediaContainer>
                        <Button big fontBig primary={primary}>
                            More
                        </Button>            
                     </DivWithShadow>

                     <DivWithShadow>
                        <Subtitle>Twitter</Subtitle> 
                        <HorizontalLine/>
                        <MediaContainer>
                            <TwitterEmbed url="https://twitter.com/carecoops/status/1654451469427388416?ref_src=twsrc%5Etfw" width={twitterWidth} height="fit-content"/>
                        </MediaContainer>
                        <MediaContainer>
                            <TwitterEmbed url="https://twitter.com/carecoops/status/1654451469427388416?ref_src=twsrc%5Etfw" width={twitterWidth} height="fit-content"/>
                        </MediaContainer>
                        <MediaContainer>
                            <TwitterEmbed url="https://twitter.com/carecoops/status/1654451469427388416?ref_src=twsrc%5Etfw" width={twitterWidth} height="fit-content"/>
                        </MediaContainer>
                        <Button big fontBig primary={primary}>
                            More
                        </Button>
                     </DivWithShadow>
                </ContainerCol>
            </InfoSec>
        </>
    )
}

export default InfoSectionLandingThree;