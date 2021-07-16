import { useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';


const colors = {
    blueGray: 'bg-blue-gray-500',
    gray: 'bg-gray-500',
    brown: 'bg-brown-500',
    deepOrange: 'bg-deep-orange-500',
    orange: 'bg-orange-500',
    amber: 'bg-amber-500',
    yellow: 'bg-yellow-600',
    lime: 'bg-lime-500',
    lightGreen: 'bg-light-green-500',
    green: 'bg-green-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    lightBlue: 'bg-light-blue-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    deepPurple: 'bg-deep-purple-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    red: 'bg-red-500',
};

export default function CurrentJobCard({src, alt, title, link, position, location}) {
    const [openJobInfo, setJobInfo] = useState(true);
    return (
        <div className="my-2 md:my-0 w-full md:w-6/12 px-4 flex flex-grow justify-center text-center">
            <Card>
                <CardBody>
                    <a href={link}>
                        <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col w-full sm:w-3/12 text-center sm:text-left pr-5 sm:border-r">
                                <H6 color="gray">{title}</H6>
                                <Paragraph color="blueGray">{position}</Paragraph>
                                <div className="text-gray-700 flex items-center justify-center sm:justify-start">
                                    <Icon name="place" size="xl" margin="sm:-ml-1"/>
                                    {location}
                                </div>
                            </div>
                            <div className={openJobInfo ? "" : "hidden"}>
                                <p className="m-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magnam distinctio expedita aut, suscipit molestiae soluta neque ipsa voluptatum maxime illum quis repellat porro ullam deleniti quae adipisci, qui minima.</p>
                            </div>
                            <div className="flex flex-row mt-2 justify-center items-center sm:hidden">
                                <a
                                    href="#"
                                    onClick={() => setJobInfo(!openJobInfo)}
                                    rel="no-refresh"
                                >
                                    <Button
                                        color="blueGray"
                                        buttonType="link"
                                        ripple="dark"
                                    >
                                        Show {openJobInfo ? "less" : "more"}
                                    </Button>
                                </a>
                            </div>
                            
                        </div>
                        
                    </a>
                </CardBody>
            </Card>
        </div>
    );
}
