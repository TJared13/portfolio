import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
// import StatusCard from 'components/landing/StatusCard';
import StatusLinkCard from './StatusLinkCard';
import Teamwork from 'assets/img/teamwork.jpeg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-around relative z-50">
                        <StatusLinkCard 
                            color="blueGray" 
                            icon="account_balance" 
                            title='Experience'
                            link="/resume"
                        >
                            Graduating <span className="font-medium">April of 2022 </span> 
                            from the Information Systems Program in the Marriott School of
                            Business at Brigham Young University.
                        </StatusLinkCard>
                        <StatusLinkCard
                            color="gray"
                            icon="work"
                            title="Experience"
                            link="/education"
                        >
                            Working as a <a href="/resume" className="font-medium">IT Project Management Intern </a>
                            at Avolta, Inc. Resposibilities included sytems administration and management 
                            of a SSO Platform integration.
                        </StatusLinkCard>
                        <StatusLinkCard
                            color="teal"
                            icon="fingerprint"
                            title="Projects"
                            link="/projects"
                        >
                            Worked on projects using ASP.Net, Python, Javascript and General HTML/CSS. 
                            Building experience with SwuitUI and ReactJS.
                        </StatusLinkCard>
                    
                    
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Working with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            Don't let your uses guess by attaching tooltips and
                            popoves to any element. Just make sure you enable
                            them first via JavaScript.
                        </LeadText>
                        <LeadText color="blueGray">
                            The kit comes with three pre-built pages to help you
                            get started faster. You can change the text and
                            images and you're good to go. Just make sure you
                            enable them first via JavaScript.
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Top Notch Services</H6>
                                <Paragraph color="blueGray">
                                    The Arctic Ocean freezes every winter and
                                    much of the sea-ice then thaws every summer,
                                    and that process will continue whatever
                                    happens.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
