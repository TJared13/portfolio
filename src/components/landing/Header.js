import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center -mb-3 absolute top-0 w-full h-full rounded-b-lg" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white" weight="bold">Modern. Secure. Powerful.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200" lineHeight="leading-0">
                                I create websites that establish a Modern UI for spectacular user experience, utilize modern technologies to provide secure browsing and powerful design that will improve interaction.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
