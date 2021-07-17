import H2 from '@material-tailwind/react/Heading2';

export default function Header() {
    return (
    //  <section className="relative block h-[500px]">
    //     <div className="bg-roadTrees-background bg-cover bg-center absolute top-0 w-full h-full" />
    //  </section>
        <div className="relative flex h-[300px] content-center items-center justify-center">
            <div className="bg-forestTrees-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto mt-10 md:mt-0">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white" weight="light">Experience</H2>
                    </div>
                </div>
            </div>
        </div>
    );
}
