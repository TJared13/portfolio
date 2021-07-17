import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/experience/Header';
import Content from 'components/experience/Content';

export default function Experience() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content />
            </main>
            <DefaultFooter />
        </>
    );
}