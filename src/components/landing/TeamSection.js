import Title from 'components/landing/Title';
import Icon from '@material-tailwind/react/Icon';
import Image1 from 'assets/img/IMG_5988.jpeg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';

export default function TeamSection() {
    return (
        <section className="bg-gray-100">
            <div className="pt-20 pb-48 bg-arches-background bg-cover bg-left rounded-xl shadow-lg">
                <div className="container max-w-7xl mx-auto px-4">
                    <Title heading="Get to know me." titleColor="white" textColor='white'>
                        I am pursuing a career in Mobile/Web Development, I am currently completing my degree in Information Systems at Brigham Young University.
                        I eagerly anticipate working with a team to develop effecient and powerful applications!
                    </Title>
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-9/12 sm:w-6/12 lg:w-4/12 px-4 mx-auto flex justify-center lg:mt-0">
                            <Card>
                                <CardImage alt="Card Image" src={Image1} />
                                <CardBody>
                                    <div className="flex flex-col text-center justify-center pt-3">
                                        <a href="/profile">
                                            <H6>Dallin Jared</H6>
                                            <Paragraph>Mobile/Web Developer</Paragraph>
                                        </a>
                                
                                        <div className="flex gap-2 mt-6 justify-around lg:mb-0 mb-8">
                                            <a
                                                href="https://www.facebook.com/CreativeTim"
                                                className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Icon
                                                    family="font-awesome"
                                                    name="fab fa-facebook-square"
                                                />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/creativetimofficial/"
                                                className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Icon
                                                    family="font-awesome"
                                                    name="fab fa-instagram"
                                                />
                                            </a>
                                            <a
                                                href="https://github.com/creativetimofficial"
                                                className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Icon
                                                    family="font-awesome"
                                                    name="fab fa-github"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

TeamSection.defaultProps = {
    titleColor: 'white',
    textColor: 'white'
  };
