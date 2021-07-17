// import { useState } from 'react';
import Card from './Card';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';


export default function CurrentJobCard({title, link, position, location}) {
    // const [openJobInfo, setJobInfo] = useState();

    return (
        <div className="my-2 md:my-0 w-full md:w-8/12 px-4 flex flex-grow justify-center text-center">
            <Card>
                <CardBody>
                    <a href={link}>
                        <div className="flex flex-col sm:flex-row">
                            <div className="w-full sm:border-r">
                                <div className="pr-4 sm:text-left">
                                    <H6 color="black">{title}</H6>
                                    <Paragraph color="blueGray">{position}</Paragraph>
                                    <div className="text-gray-700 flex items-center justify-center sm:justify-start">
                                        <Icon name="place" size="xl" margin="sm:-ml-1"/>
                                        {location}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="hidden sm:block">
                                <p className="m-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magnam distinctio expedita aut, suscipit molestiae soluta neque ipsa voluptatum maxime illum quis repellat porro ullam deleniti quae adipisci, qui minima.</p>
                            </div>
                        </div>
                    </a>
                </CardBody>
            </Card>
        </div>
    );
}
