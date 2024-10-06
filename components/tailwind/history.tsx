import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiDotnet } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { FaGraduationCap } from 'react-icons/fa';
import { IconType } from 'react-icons';

const CustomIcon = ({ icon, colorClass }: { icon: IconType; colorClass: string }) => {
    const IconComponent = icon;
    return <IconComponent className={`h-8 w-8 ${colorClass}`} />;
};

const Title = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-bold lg:text-3xl">{children}</h3>
);
const Subtitle = ({ children }: { children: React.ReactNode }) => (
    <h4 className="mt-2 text-lg font-normal lg:text-2xl">{children}</h4>
);

const Description = ({ children }: { children: React.ReactNode }) => (
    <p className="mt-2">{children}</p>
);

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
    return (
        <VerticalTimelineElement
            date={date}
            iconStyle={{ background: '#000000', color: '#fff' }}
            contentStyle={{ background: head ? 'rgb(46 61 132)' : '#015561', color: '#fff' }}
            contentArrowStyle={{ borderRight: `9px solid  ${head ? '#0f2075' : '#015561'}` }}
            icon={icon}>
            {children}
        </VerticalTimelineElement>
    );
};

function History(): JSX.Element {
    return (
        <div className="mt-24 flex flex-col items-center">
            <h2 className={`text-center text-3xl font-bold md:text-4xl`}>
                Work Experience and Education{' '}
            </h2>
            <VerticalTimeline className="!mt-10">
                <CustomVerticalTimeLine
                    date="2023 - Present"
                    icon={<CustomIcon icon={DiReact} colorClass="text-[#61dafb]" />}
                    head={true}>
                    <Title>Lead Experience Engineer</Title>
                    <Subtitle>Publicis Sapient</Subtitle>
                    <Description>React | Typescript | SCSS | HTML | CSS</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2022 - 2023"
                    icon={<CustomIcon icon={DiReact} colorClass="text-[#61dafb]" />}>
                    <Title>Software Engineer</Title>
                    <Subtitle>Twilio, Bangalore</Subtitle>
                    <Description>React | Typescript | SCSS | NodeJS</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2020 - 2022"
                    icon={<CustomIcon icon={DiReact} colorClass="text-[#61dafb]" />}>
                    <Title>Technical Lead IV</Title>
                    <Subtitle>Photon Interactive, Chennai</Subtitle>
                    <Description>
                        React | Typescript | SCSS | RXjs | GraphQL | S3 | Material UI | NodeJS
                    </Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2019 - 2020"
                    icon={<CustomIcon icon={DiReact} colorClass="text-[#61dafb]" />}>
                    <Title>Software Development Senior Analyst</Title>
                    <Subtitle>NTT Data, Chennai</Subtitle>
                    <Description>React | Javascript | CSS | Material UI</Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2016 - 2019"
                    icon={<CustomIcon icon={SiDotnet} colorClass="text-[#fff]" />}>
                    <Title>Programmer Analyst</Title>
                    <Subtitle>Cognizant, Coimbatore</Subtitle>
                    <Description>
                        Asp.Net MVC | C# | SQL Server | Oracle | JS | Telerik Kendo UI
                    </Description>
                </CustomVerticalTimeLine>
                <CustomVerticalTimeLine
                    date="2012 - 2016"
                    icon={<CustomIcon icon={FaGraduationCap} colorClass="text-[#81e6d9]" />}>
                    <Title>B.E Computer Science and Engineering</Title>
                    <Subtitle>Sri Ramakrishna Engineering College, Coimbatore</Subtitle>
                    <Description>Android | Java | Material UI | Php</Description>
                </CustomVerticalTimeLine>
            </VerticalTimeline>
        </div>
    );
}

export { History };
