import React from 'react'
import {InfoSec} from './InfoSectionLandingTwo.elements'
import { Container, Button, ContainerCol } from '../../globalStyles'
import { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "What is the mission and vision of the Virtual Care Network?",
            content: `The mission of the Virtual Care Network is to prioritize the well-being of caregivers by providing
            accessible and comprehensive support services. We aim to empower caregivers to fulfill their
            caregiving responsibilities while safeguarding their mental and physical health.
            Our vision is to create a virtual care ecosystem that recognizes and addresses the unique
            challenges faced by caregivers. By fostering a community of caregivers, we aspire to enhance
            their resilience, promote self-care practices, and ensure their overall health and wellness.
            Peer Support and Community: The Virtual Care Network fosters a sense of community among
            caregivers, providing opportunities for peer support and connection. This includes online
            support groups, forums, and discussion boards where caregivers can share experiences, seek
            advice, and find emotional support from others facing similar challenges.
            Empowerment and Resilience: The Virtual Care Network empowers caregivers by equipping
            them with tools and resources to build resilience and cope with the demands of caregiving. This
            involves promoting self-advocacy, providing coping strategies, and encouraging caregivers to
            prioritize their own well-being.`,
        },
        {
            title: "Are there any eligibility criteria or requirements for accessing the programs/services?",
            content:
            `The primary eligibility criterion is being employed or working in a healthcare field. The intention
            of the VCN is to provide a platform for healthcare professionals to come together, share
            experiences, seek support, and connect with others in similar roles. Healthcare professionals
            from various disciplines (such as doctors, nurses, therapists, technicians, administrators, etc.)
            are welcome to join and participate. The requirement would be limited to individuals actively
            involved in healthcare provision or related support roles. Other than the healthcare
            employment criterion, there is not any additional eligibility criteria or requirements for
            accessing the programs or services on the website. The focus is to foster a sense of community,
            collaboration, and mutual support among healthcare professionals.`,
        },
        {
            title: "What are the different dimensions of the Virtual Care Network (physical, mental, well-being)?",
            content: `The Virtual Care Network encompasses various dimensions of care to address the holistic well-
            being of caregiving individuals.`,
        }
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "#1c2237",
    rowTitleColor: "#1c2237",
    rowContentColor: 'grey',
    arrowColor: "#1c2237",
};

const config = {
    animate: true,
    arrowIcon: "v",
    tabFocus: true
};

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
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSectionLandingTwo;