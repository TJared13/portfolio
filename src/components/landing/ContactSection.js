import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 pt-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Lets Create Something">
                    I pride myself in being a motivated self-learner and driven individual. I enjoy
                    working on new projects and expanding my abilities. I am confident in the skills
                     I currently have, and I have confidence in my ability to adapt and learn new skills 
                     to meet job requirements
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="people" title="Team Focus">
                        I have seen the positive impact of properly managing a team 
                        and creating a collaborative environment.
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Grow Your Market">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
