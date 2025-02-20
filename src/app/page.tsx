// import { onGetBlogPosts } from '@/actions/landing'
// import NavBar from '@/components/navbar'
// import { Button } from '@/components/ui/button'

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import { pricingCards } from '@/constants/landing-page'
// import clsx from 'clsx'
// import { ArrowRightCircleIcon, Check } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import parse from 'html-react-parser'
// import { getMonthName } from '@/lib/utils'

// export default async function Home() {
//   const posts:
//     | {
//         id: string
//         title: string
//         image: string
//         content: string
//         createdAt: Date
//       }[]
//     | undefined = await onGetBlogPosts()
//   console.log(posts)
//   return (
//     <main>
//       <NavBar />
//       <section>
//         <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
//           <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
//             An AI powered sales assistant chatbot
//           </span>
//           <Image
//             src="/images/corinna-ai-logo.png"
//             width={500}
//             height={100}
//             alt="Logo"
//             className="max-w-lg object-contain"
//           />
//           <p className="text-center max-w-[500px]">
//             Your AI powered sales assistant! Embed Corinna AI into any website
//             with just a snippet of code!
//           </p>
//           <Link
//         href="/dashboard"className="bg-orange font-bold text-white px-4" >
//             Start For Free
//           </Link>
//           <Image
//             src="/images/iphonecorinna.png"
//             width={400}
//             height={100}
//             alt="Logo"
//             className="max-w-lg object-contain"
//           />
//         </div>
//       </section>
//       <section className="flex justify-center items-center flex-col gap-4 mt-10">
//         <h2 className="text-4xl text-center"> Choose what fits you right</h2>
//         <p className="text-muted-foreground text-center max-w-lg">
//           Our straightforward pricing plans are tailored to meet your needs. If
//           {" you're"} not ready to commit you can get started for free.
//         </p>
//       </section>
//       <div className="flex  justify-center gap-4 flex-wrap mt-6">
//         {pricingCards.map((card) => (
//           <Card
//             key={card.title}
//             className={clsx('w-[300px] flex flex-col justify-between', {
//               'border-2 border-primary': card.title === 'Unlimited',
//             })}
//           >
//             <CardHeader>
//               <CardTitle className="text-orange">{card.title}</CardTitle>
//               <CardDescription>
//                 {pricingCards.find((c) => c.title === card.title)?.description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <span className="text-4xl font-bold">{card.price}</span>
//               <span className="text-muted-foreground">
//                 <span>/ month</span>
//               </span>
//             </CardContent>
//             <CardFooter className="flex flex-col items-start gap-4">
//               <div>
//                 {card.features.map((feature) => (
//                   <div
//                     key={feature}
//                     className="flex gap-2"
//                   >
//                     <Check />
//                     <p>{feature}</p>
//                   </div>
//                 ))}
//               </div>
//               <Link
//                 href={`/dashbord?plan=${card.title}`}
//                 className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
//               >
//                 Get Started
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <section className="flex justify-center items-center flex-col gap-4 mt-28">
//         <h2 className="text-4xl text-center">News Room</h2>
//         <p className="text-muted-foreground text-center max-w-lg">
//           Explore our insights on AI, technology, and optimizing your business.
//         </p>
//       </section>

//       <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
//         {posts &&
//           posts.map((post) => (
//             <Link
//               href={`/blogs/${post.id}`}
//               key={post.id}
//             >
//               <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
//                 <div className="relative w-full aspect-video">
//                   <Image
//                     src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
//                     alt="post featured image"
//                     fill
//                   />
//                 </div>
//                 <div className="py-5 px-10 flex flex-col gap-5">
//                   <CardDescription>
//                     {getMonthName(post.createdAt.getMonth())}{' '}
//                     {post.createdAt.getDate()} {post.createdAt.getFullYear()}
//                   </CardDescription>
//                   <CardTitle>{post.title}</CardTitle>
//                   {parse(post.content.slice(4, 100))}...
//                 </div>
//               </Card>
//             </Link>
//           ))}
//       </section>
//     </main>
//   )
// }


import { onGetBlogPosts } from '@/actions/landing';
import NavBar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useState } from 'react';
import ContactUs from '@/components/contactus';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from '@/constants/landing-page';
import clsx from 'clsx';
import { ArrowRightCircleIcon, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import { getMonthName } from '@/lib/utils';

import  InfiniteMovingCards  from '@/components/infinite-moving-card';
import { clients } from '@/constants/inifine-moving-cards';
import { HeroParallax } from '@/components/global/connect-parallax';
import { products } from '@/constants/heroPallax';
import { ContainerScroll } from '@/components/global/container-scroll-animation';


export default async function Home() {
  // Fetch the posts using the onGetBlogPosts function
  const posts:
    | {
        id: string;
        title: string;
        image: string;
        content: string;
        createdAt: Date;
      }[]
    | undefined = await onGetBlogPosts();

  // Log the fetched posts to check if we receive the correct data
  console.log('Fetched posts:', posts);
  
  



  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span  id="home" className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
            An AI powered sales assistant chatbot
          </span>
          <Image
            src="/images/corinna-ai-logo.png"
            width={500}
            height={100}
            alt="Logo"
            className="max-w-lg object-contain"
          />
          
          <p className="text-center max-w-[500px]">
            Your AI powered sales assistant! Embed Corinna AI into any website
            with just a snippet of code! 
          </p>
          <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit 
                  border-t-2 rounded-full border-[#4D4D4D] bg-orange/100 
                  hover:bg-white group transition-all flex items-center justify-center 
                  gap-4 hover:shadow-l hover:shadow-neutral-500 duration-100"
          >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                      <a href='/dashboard'>Start For Free Today</a>
                  </span>
          </Button>
          <Image
            src="/images/iphonecorinna.png"
            width={400}
            height={100}
            alt="Logo"
            className="max-w-lg object-contain"
          />
        </div>
      </section>
      
      <section className="h-full w-full   rounded-md  
      !overflow-visible relative flex flex-col items-center  mt-30">
          <div className="absolute inset-0  h-full w-full items-center px-5 py-24
           [background: radial-gradient(125% 125% at 50% 10%, #fff 35%, #223 100%)]">

           </div>
          <div className="flex flex-col mt-[100px] md:mt-[-50px]">
            <ContainerScroll
              titleComponent={
              <div className="flex items-center flex-col">
{/* 
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit 
                  border-t-2 rounded-full border-[#4D4D4D] bg-orange/100 
                  hover:bg-white group transition-all flex items-center justify-center 
                  gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-100"
                >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                        Start For Free Today
                      </span>
                    </Button> */}
                    <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                      Enhance Your Business with Corinna-Ai
                    </h1>
                  </div>
                }
              />
            </div>
      </section>
      {/* <InfiniteMovingCards
        className="md:mt-[10rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      /> */}
      {/* <div className=''><br/></div> */}
{/*       <section className=''>
        <HeroParallax products={products}></HeroParallax>
      </section> */}
      

      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </section>

      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashboard?plan=${card.title}`}
                className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="flex justify-center items-center flex-col gap-4 mt-28">
        <h2 className="text-4xl text-center">News Room</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and optimizing your business.
        </p>
      </section>

      {/* <section className=" md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8"> */}
      {/* <section className='container mx-auto flex justify-center mt-8 h-30px w-30px'>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <Card className=" flex  gap-2 rounded-xl overflow-hidden  hover:bg-gray-100">
                <div className="h-30 w-30 relative w-full aspect-video">
                  <Image
                    src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                    alt="post featured image"
                    fill
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(0, 100))}...
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center">No blog posts available at the moment.</p>
        )}
      </section> */}
      <ContactUs/>
    </main>
  );
}
