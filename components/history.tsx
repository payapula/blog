import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiDotNet } from 'react-icons/si';
import { Icon, Flex, Heading, chakra, useColorModeValue } from '@chakra-ui/react';
import { DiReact } from 'react-icons/di';
import { FaGraduationCap } from 'react-icons/fa';

const CustomIcon = ({ icon, color }) => <Icon as={icon} width="8" height="8" color={color} />;

const Title = ({ children }) => (
    <Heading as="h3" fontSize={['2xl', null, null, null, '3xl']}>
        {children}
    </Heading>
);
const Subtitle = ({ children }) => (
    <Heading as="h4" fontSize={['xl', null, null, null, '2xl']} fontWeight="normal" mt={2}>
        {children}
    </Heading>
);

const Description = ({ children }) => <chakra.p mt={2}>{children}</chakra.p>;

const ChakraVerticalTimeline = chakra(VerticalTimeline);
// const ChakraVerticalTimelineElement = chakra(VerticalTimelineElement, {
//     shouldForwardProp: (prop) => {
//         // Refer - https://chakra-ui.com/docs/features/chakra-factory#allowing-custom-props-to-be-forwarded
//         // If we allow all props, borderRadius would be passed to DOM element
//         // which we dont want
//         const isValidProp = isValidHTMLProp(prop);
//         if (isValidProp) return true;

//         return false;
//     }
// });

const CustomVerticalTimeLine = ({ date, icon, children, head = false }) => {
    return (
        <VerticalTimelineElement
            // as="section"
            className="vertical-timeline-element"
            date={date}
            iconStyle={{ background: '#000000', color: '#fff' }}
            contentStyle={{ background: head ? '#0f2075' : '#015561', color: '#fff' }}
            contentArrowStyle={{ borderRight: `9px solid  ${head ? '#0f2075' : '#015561'}` }}
            icon={icon}>
            {children}
        </VerticalTimelineElement>
    );
};

function History() {
    const lineColor = useColorModeValue('#319795', 'white');
    return (
        <Flex direction="column" align="center" mt={24}>
            <Heading textAlign="center">Work Experience and Education </Heading>
            <ChakraVerticalTimeline
                mt={10}
                sx={{
                    ':before': {
                        background: lineColor
                    }
                }}>
                <CustomVerticalTimeLine
                    date="2020 - Present"
                    icon={<CustomIcon icon={DiReact} color="#61dafb" />}
                    head={true}>
                    <Title>Senior Software Engineer II</Title>
                    <Subtitle>Photon, Chennai</Subtitle>
                    <Description>Working in React, Typescript & GraphQL project</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2019 - 2020"
                    icon={<CustomIcon icon={DiReact} color="#61dafb" />}>
                    <Title>Software Development Senior Analyst</Title>
                    <Subtitle>NTT Data, Chennai</Subtitle>
                    <Description>
                        Worked on ReactJS project for Management Portal development
                    </Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2016 - 2019"
                    icon={<CustomIcon icon={SiDotNet} color="#fff" />}>
                    <Title>Programmer Analyst</Title>
                    <Subtitle>Cognizant, Coimbatore</Subtitle>
                    <Description>Asp.Net MVC Application Developer worked on blah blah</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2012 - 2016"
                    icon={<CustomIcon icon={FaGraduationCap} color="#81e6d9" />}>
                    <Title>B.E Computer Science and Engineering</Title>
                    <Subtitle>Sri Ramakrishna Engineering College, Coimbatore</Subtitle>
                </CustomVerticalTimeLine>
            </ChakraVerticalTimeline>
        </Flex>
    );
}

export { History };
