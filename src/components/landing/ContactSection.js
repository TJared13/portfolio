import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="py-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-6">
                <Title heading="Lets Create Something">
                    I am a motivated self-learner and a driven individual. I enjoy
                    working on new projects and expanding my abilities. I am confident I can learn new skills 
                     to meet job requirements and be fully involved in the progress of the projects.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="people" title="Team Focus">
                        I have seen the positive impact of properly managing a team 
                        and creating a collaborative environment.
                    </ContactCard>
                    <ContactCard icon="hearing" title="Listening">
                        I believe the best developers are good listeners and 
                        provide honest feedback to meet clients needs.
                    </ContactCard>
                    <ContactCard icon="alarm" title="Prompt Response">
                        I believe quick, clear and constant communication is
                         the key to success.
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
