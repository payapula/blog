import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiDotnet } from 'react-icons/si';
import { Icon, Flex, Heading, chakra, useColorModeValue } from '@chakra-ui/react';
import { DiReact } from 'react-icons/di';
import { FaGraduationCap } from 'react-icons/fa';
import { IconType } from 'react-icons';

const CustomIcon = ({ icon, color }: { icon: IconType; color: string }) => (
    <Icon as={icon} width="8" height="8" color={color} />
);

const Title = ({ children }: { children: React.ReactNode }) => (
    <Heading as="h3" fontSize={['xl', null, null, null, '3xl']}>
        {children}
    </Heading>
);
const Subtitle = ({ children }: { children: React.ReactNode }) => (
    <Heading as="h4" fontSize={['lg', null, null, null, '2xl']} fontWeight="normal" mt={2}>
        {children}
    </Heading>
);

const Description = ({ children }: { children: React.ReactNode }) => (
    <chakra.p mt={2}>{children}</chakra.p>
);

const ChakraVerticalTimeline = chakra(VerticalTimeline, {
    shouldForwardProp: () => true
});
const ChakraVerticalTimelineElement = chakra(VerticalTimelineElement);

interface CustomVerticalTimeLineProps {
    date: string;
    icon: JSX.Element;
    children: React.ReactNode;
    head?: boolean;
}

const CustomVerticalTimeLine = ({
    date,
    icon,
    children,
    head = false
}: CustomVerticalTimeLineProps) => {
    const dateColor = useColorModeValue('black', 'white');
    return (
        <ChakraVerticalTimelineElement
            sx={{
                '.vertical-timeline-element-date': { fontWeight: 'bold' },
                '@media only screen and (min-width: 1170px)': {
                    '.vertical-timeline-element-date': {
                        color: dateColor
                    }
                }
            }}
            className="vertical-timeline-element"
            date={date}
            iconStyle={{ background: '#000000', color: '#fff' }}
            contentStyle={{ background: head ? 'rgb(46 61 132)' : '#015561', color: '#fff' }}
            contentArrowStyle={{ borderRight: `9px solid  ${head ? '#0f2075' : '#015561'}` }}
            icon={icon}>
            {children}
        </ChakraVerticalTimelineElement>
    );
};

function History(): JSX.Element {
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
                    date="2023 - Present"
                    icon={<CustomIcon icon={DiReact} color="#61dafb" />}
                    head={true}>
                    <Title>Senior Associate, Experience Technology</Title>
                    <Subtitle>Publicis Sapient</Subtitle>
                    <Description>React | Typescript | SCSS | HTML | CSS</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2022 - 2023"
                    icon={<CustomIcon icon={DiReact} color="#61dafb" />}>
                    <Title>Software Engineer</Title>
                    <Subtitle>Twilio, Bangalore</Subtitle>
                    <Description>React | Typescript | SCSS | NodeJS</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2020 - 2022"
                    icon={<CustomIcon icon={DiReact} color="#61dafb" />}>
                    <Title>Technical Lead IV</Title>
                    <Subtitle>Photon Interactive, Chennai</Subtitle>
                    <Description>
                        React | Typescript | SCSS | RXjs | GraphQL | S3 | Material UI | NodeJS
                    </Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2019 - 2020"
                    icon={<CustomIcon icon={DiReact} color="#61dafb" />}>
                    <Title>Software Development Senior Analyst</Title>
                    <Subtitle>NTT Data, Chennai</Subtitle>
                    <Description>React | Javascript | CSS | Material UI</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2016 - 2019"
                    icon={<CustomIcon icon={SiDotnet} color="#fff" />}>
                    <Title>Programmer Analyst</Title>
                    <Subtitle>Cognizant, Coimbatore</Subtitle>
                    <Description>
                        Asp.Net MVC | C# | SQL Server | Oracle | JS | Telerik Kendo UI
                    </Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2012 - 2016"
                    icon={<CustomIcon icon={FaGraduationCap} color="#81e6d9" />}>
                    <Title>B.E Computer Science and Engineering</Title>
                    <Subtitle>Sri Ramakrishna Engineering College, Coimbatore</Subtitle>
                    <Description>Android | Java | Material UI | Php</Description>
                </CustomVerticalTimeLine>
            </ChakraVerticalTimeline>
        </Flex>
    );
}

export { History };
