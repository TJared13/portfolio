import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';

export default function Form() {
    return (
        <div className="flex flex-wrap justify-center mt-24 mx-auto bg-white rounded-xl shadow-lg md:w-9/12 lg:w-8/12 xl:w-6/12">
            <div className="w-full lg:w-8/12 px-4 pt-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">Want to work with me?</H3>
                            <Paragraph color="blueGray">
                                Complete this form and I will get back to you
                                in 24 hours.
                            </Paragraph>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    color="lightBlue"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    color="lightBlue"
                                />
                            </div>

                            <Textarea color="lightBlue" placeholder="Message" />

                            <div className="flex justify-center mt-10">
                                <Button color="blueGray" ripple="light">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
