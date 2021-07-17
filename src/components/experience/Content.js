import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import ProfilePicture from 'assets/img/IMG_5988.jpeg';
import CurrentJobCard from './CurrentJobCard';


export default function Content() {
    return (
        <section className="relative -mt-100 pb-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-b-2xl -mt-150">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:mt-5 w-full lg:w-4/12 px-4 lg:order-3">
                                <div className="text-center my-4">
                                    <H3 color="gray">Dallin Jared</H3>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between lg:order-1 lg:self-center lg:mt-5 lg:w-4/12">
                                <div className="my-2 text-gray-700 flex flex-row xs:flex-col items-start md:items-center justify-start gap-2">
                                    <Icon name="place" size="xl" margin="sm:mr-2 md:mr-5"/>
                                    Provo, Utah
                                </div>
                                <div className="mb-2 text-gray-700 flex flex-row items-start md:items-center justify-center md:justify-start gap-2">
                                    <Icon name="work" size="xl" margin="sm:mr-2 md:mr-5"/>
                                    IT Project Management Intern
                                </div>
                            </div>
                            
                        </div>

                        <div className="flex justify-center pt-10 my-10 py-2 border-t border-gray-200">
                            <CurrentJobCard
                                title="Avolta"
                                link="/experience/avolta"
                                position="IT Project Management Intern"
                                location="Provo, Utah"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
