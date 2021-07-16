import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Icon from '@material-tailwind/react/Icon';
import NavLink from '@material-tailwind/react/NavLink';

export default function LandingTeamCard({ img, name, position, nameColor, positionColor }) {
    return (
        <div className="w-full md:w-8/12 lg:w-4/12 mb-12 px-4">
            <div className="px-6">
                
                <div className="flex flex-col md:flex-row">
                    <div>
                        <Image src={img} alt={name} raised />
                    </div>
                    <div className="flex flex-col text-center justify-center pt-3 md:text-left md:py-10 md:pl-10">
                        <a href="/profile">
                            <H6 color={nameColor}>{name}</H6>
                            <Paragraph color={positionColor}>{position}</Paragraph>
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    );
}

LandingTeamCard.defaultProps = {
    nameColor: 'white',
    positionColor: 'white'
  };