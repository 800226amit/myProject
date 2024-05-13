'use client'
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Earth from "@/components/images/Earth.jpg";
import Forestroot from "@/components/images/forestroot.webp";
import Flower from "@/components/images/flower.jpeg";
import Tree from "@/components/images/Tree.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { title } from 'process';

import { AspectRatio } from "@/components/ui/aspect-ratio"


import { List, SubHeading, companylogo, myIframe, FeaturTechnology, LatestTechnology, devOps } from "./config/card.js";




export default function Body() {


    // const description = list.description;
    const desbordtitle = "Your Gateway to Freelance Success!";
    const deshbordDescript = "Are you a freelancer looking for exciting opportunities? Or a business seeking top talent for your projects? Look no further. Website उपचार is the ultimate destination for freelancers and clients to connect, collaborate, and succeed.";

    const images = useMemo(() => [Flower, Earth, Tree, Forestroot], []);

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const slideNext = useCallback(() => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images]);

    useEffect(() => {
        const interval = setInterval(slideNext, 1000);
        return () => clearInterval(interval);
    }, [slideNext]);


    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-blue-100 w-full space-y-16'>

            {/* Start First Section  */}

            <div className="relative w-full max-w-screen-xl h-[100vh] flex justify-center items-center">
                <div className="w-full sm:max-w-[430px] md:max-w-[680px] lg:max-w-[1250px]">
                    <div className='relative border-8 border-slate-800 border-solid rounded-lg shadow-2xl'>
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src={images[activeImageIndex]}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                                className='w-full h-full object-cover'
                            />
                            <Link href="https://github.com/amitkeen/Keycloak/blob/65d7ee7ca77ad3aa6c944eaf9c5d30aef3747b25/keycloak/README.md" target='_blank' 
                            className='absolute bottom-5 left-5 bg-lime-50 px-4 py-2 rounded-lg transition duration-700 ease-in-out hover:bg-lime-300'>
                                Explore Here
                            </Link>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-5'>
                                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>{desbordtitle}</h1>
                                <p className='mt-4 text-lg md:text-xl lg:text-lg text-gray-300'>{deshbordDescript}</p>
                            </div>
                        </AspectRatio>
                    </div>
                </div>
            </div>


            {/* End First Section  */}


            {/* Start Second Section  */}
            <div className="flex justify-center">
                <Carousel className="flex justify-center h-auto w-full   p-4" opts={{ align: 'center' }}>
                    <CarouselContent className='flex flex-col-4'>
                        {myIframe.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="h-auto md:basis-1/2 lg:basis-1/4">
                                    <div className="rounded overflow-hidden w-full flex justify-center / container px-5 py-24 mx-auto">
                                        <div className="px-6 py-4 max-w-sm p-4 / -m-4">
                                            <div className=" text-xl mb-2 flex flex-col-4">
                                                <Card key={index} className='bg-blue-100 xl:w-1/4 md:w-1/2 p-4'>
                                                    <div className=" w-80 object-cover p-4 ">
                                                        <Link href={item.projectsample}>
                                                            <Image
                                                                src={item.projectimage}
                                                                alt='project image'
                                                                width={1200}
                                                                height={800}
                                                                className=' object-cover rounded bg-cyan-800 h-80 w-80 '

                                                            />
                                                        </Link>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>


            {/* <div className="flex justify-center">
                <Carousel className="flex justify-center h-auto w-full   p-4" opts={{ align: 'center' }}>
                    <CarouselContent className='flex flex-col-4'>
                        {myIframe.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="h-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/4 w-80">
                                   
                                                <Card key={index} className='bg-blue-100 xl:w-1/4 md:w-1/2 p-4 w-80'>
                                                    <div className=" w-80 object-cover p-4 ">
                                                        <Link href={item.projectsample}>
                                                            <Image
                                                                src={item.projectimage}
                                                                alt='project image'
                                                                width={1200}
                                                                height={800}
                                                                className=' object-cover rounded bg-cyan-800 h-80 w-80 '

                                                            />
                                                        </Link>
                                                    </div>
                                                </Card>
                                            
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div> */}
            

            {/* End Second Section  */}



            {/* Start Thired Section  Featured Technology  */}
            <div>
                {SubHeading.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 className='text-3xl font-bold font-sans'>{item.Heading}</h1>
                        </div>
                    );
                })}

            </div>


            <div className="flex justify-center">
                <Carousel className="flex justify-center h-auto w-full   p-4" opts={{ align: 'center' }}>
                    <CarouselContent className='flex flex-col-4'>
                        {FeaturTechnology.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="h-auto md:basis-1/2 lg:basis-1/3">
                                    <div className="rounded overflow-hidden w-full flex justify-center">
                                        <div className="px-6 py-4 max-w-sm p-4">
                                            <div className=" text-xl mb-2 flex flex-col-4 p-4">
                                                <Card key={index}>
                                                    <div className=" w-80 object-cover p-4">
                                                        <Link href={item.projectsample} ><Image
                                                            src={item.image}
                                                            alt="Picture of the author"
                                                            className='w-80 rounded-xl h-80 object-cover'
                                                            width={1200}
                                                            height={600}
                                                        /></Link>
                                                    </div>
                                                    <CardContent>
                                                        <h1 className='flex justify-center font-bold'>{item.Footer} </h1>
                                                    </CardContent>

                                                </Card>
                                            </div>

                                        </div>

                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>

                </Carousel>
            </div>
            {/* End Third Section Feature Technology */}





            {/* Start fourth Section Latest Technology */}
            <div>
                {SubHeading.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 className='text-3xl font-bold font-sans'>{item.Heading1}</h1>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-center">
                <Carousel className="flex justify-center h-auto w-full   p-4" opts={{ align: 'center' }}>
                    <CarouselContent className='flex flex-col-4'>
                        {LatestTechnology.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="h-auto md:basis-1/2 lg:basis-1/3">
                                    <div className="rounded overflow-hidden w-full flex justify-center">
                                        <div className="px-6 py-4 max-w-sm p-4">
                                            <div className=" text-xl mb-2 flex flex-col-4 p-4">
                                                <Card key={index}>
                                                    <div className=" w-80 object-cover p-4 ">
                                                        <Link href={item.projectsample} ><Image
                                                            src={item.image}
                                                            alt="Picture of the author"
                                                            className='w-80 rounded-xl h-80 object-cover'
                                                            width={1200}
                                                            height={600}
                                                        /></Link>
                                                    </div>
                                                    <CardContent>
                                                        <h1 className='flex justify-center font-bold'>{item.Footer} </h1>
                                                    </CardContent>

                                                </Card>
                                            </div>

                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>


            {/* End Fourth Section Latest Technology */}

            {/* Start Fifth Section dev opes  */}


            <div className='flex flex-col-4  space-x-4 justify-center items-center w-screen h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-50  to-amber-200 '>
                {devOps.map((item, index) => {

                    return (
                        <div key={index} className='flex flex-col-3 '>

                            <div className=' w-80'>
                                <Image
                                    src={item.image}
                                    alt="Picture of the author"
                                    layout="responsive"
                                    className='w-60'
                                    width={1200}
                                    height={600}
                                />
                            </div>
                            <div className='grid '>
                                <p>{item.shorthead}</p>
                                <h1 className=' text-5xl font-bold '>{item.Heading}</h1>
                                <p>{item.Description}</p>
                                <div>
                                    <Link href="https://github.com/amitkeen/Keycloak/blob/65d7ee7ca77ad3aa6c944eaf9c5d30aef3747b25/keycloak/README.md" target='_blank' className=' bg-yellow-300 px-4 py-2 rounded-lg transition text-blue-800 duration-700 ease-in-out hover:bg-yellow-900 hover:text-indigo-50'>
                                        Explore Here
                                    </Link>
                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>

            {/* End Fifth Section  */}

            {/* Start Sixth Section  */}

            <div className="flex justify-center ">
                <Carousel className="flex justify-center h-auto w-full   p-4" opts={{ align: 'center' }}>
                    <CarouselContent className='flex flex-col-4'>
                        {List.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="h-auto md:basis-1/2 lg:basis-1/3">
                                    <div className="rounded overflow-hidden w-full flex justify-center ">
                                        <div className="px-6 py-4 max-w-sm p-4">
                                            <div className=" text-xl mb-2 flex flex-col-4 p-4">
                                                <Card key={index}>
                                                    <div className=" w-80 object-cover p-4">
                                                        <Image
                                                            src={item.img}
                                                            alt={item.title}
                                                            width={1200}
                                                            height={600}
                                                            className=' object-cover rounded bg-cyan-800'

                                                        />
                                                    </div>
                                                    <CardContent>
                                                        <h1 className='flex justify-center font-bold'>{item.name} </h1>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </CardContent>
                                                    <CardFooter className="flex justify-center">
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                            Next js.
                                                        </span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                            Java
                                                        </span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                            Figma
                                                        </span>
                                                    </CardFooter>
                                                </Card>
                                            </div>

                                        </div>

                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* End Sixth Section  */}


            {/* Start Saventh Section  */}

            <div className="flex justify-center">
                <Carousel className="flex justify-center h-auto w-full   p-4" opts={{ align: 'center' }}>
                    <CarouselContent className='flex flex-col-4'>
                        {companylogo.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="h-auto md:basis-1/2 lg:basis-1/5">
                                    <div className="rounded overflow-hidden w-full flex justify-center">
                                        <div className="px-6 py-4 max-w-sm p-4">
                                            <div className=" text-xl mb-2 flex flex-col-4 p-4">
                                                <Card key={index}>
                                                    <div className=" w-60 object-cover p-4 ">
                                                        <Link href="">
                                                            <Image
                                                                src={item.image}
                                                                alt="This is logo"
                                                                width={1200}
                                                                height={200}
                                                                className=' object-cover rounded bg-cyan-800 h-28'

                                                            /></Link>
                                                    </div>

                                                </Card>
                                            </div>

                                        </div>

                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            {/* End Seventh Section  */}

            {/* start eight section  */}



            {/* end eight section  */}

        </div>

        // end eight section for complany logos 
    );
}
