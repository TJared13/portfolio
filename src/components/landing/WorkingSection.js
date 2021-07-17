import StatusLinkCard from './StatusLinkCard';

export default function WorkingSection() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-around relative z-50">
                        <StatusLinkCard 
                            color="blueGray" 
                            icon="account_balance" 
                            title='Education'
                            link="/education"
                        >
                            Graduating <span className="font-medium">April of 2022 </span> 
                            from the Information Systems Program in the Marriott School of
                            Business at Brigham Young University.
                        </StatusLinkCard>
                        <StatusLinkCard
                            color="gray"
                            icon="work"
                            title="Experience"
                            link="/experience"
                        >
                            Working as a <a href="/experience" className="font-medium">IT Project Management Intern </a>
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
            </div>
        </section>
    );
}
