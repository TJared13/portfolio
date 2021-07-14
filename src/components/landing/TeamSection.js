import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/IMG_5988.jpeg';

export default function TeamSection({titleColor, textColor}) {
    return (
        <section className="pt-20 pb-48 bg-arches-background bg-cover bg-left">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Here are our heroes" titleColor={titleColor} textColor={textColor}>
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                </Title>
                <div className="flex flex-wrap items-center justify-center">
                    <TeamCard
                        img={Image1}
                        name="Dallin Jared"
                        position="Mobile/Web Developer"
                    />
                </div>
            </div>
        </section>
    );
}

TeamSection.defaultProps = {
    titleColor: 'white',
    textColor: 'white'
  };
