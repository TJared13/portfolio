import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/IMG_5988.jpeg';
import NavLink from '@material-tailwind/react/NavLink';


export default function Content() {
    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            height="400"
                                            width="400"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex px-4 justify-between lg:order-3 lg:self-center mt-10 lg:justify-around lg:mt-0 lg:w-4/12">
                                {/* <div className="flex gap-2 mt-6 lg:mb-0 mb-8 justify-around"> */}
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
                                    <a
                                        href="https://www.facebook.com/dallinmjared"
                                        className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
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
                                        className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon
                                            family="font-awesome"
                                            name="fab fa-instagram"
                                        />
                                    </a>
                                {/* </div> */}
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="text-center my-8">
                                    <H3 color="gray">Dallin Jared</H3>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        Provo, Utah
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="text-center mb-8">
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="work" size="xl" />
                                IT Project Management Intern - Avolta
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="account_balance" size="xl" />
                                Marriott School of Business, Brigham Young University
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                        An artist of considerable range, Jenna
                                        the name taken by Melbourne-raised,
                                        Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own
                                        music, giving it a warm, intimate feel
                                        with a solid groove structure. An artist
                                        of considerable range.
                                    </LeadText>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Button
                                            color="lightBlue"
                                            buttonType="link"
                                            ripple="dark"
                                        >
                                            Show more
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
