// // pages/contact.tsx
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log({ name, email, message });

//     // Simulate a successful form submission
//     setSuccess(true);
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div className="flex justify-center items-center flex-col gap-4 mt-28">
//       <h1 className="text-4xl mb-4 text-center">Contact Us</h1>
//       <p className="text-muted-foreground text-center max-w-lg">We'd love to hear from you! Please fill out the form below.</p>

//       {success && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
//           <strong className="font-bold">Success!</strong>
//           <span className="block sm:inline"> Your message has been sent.</span>
//         </div>
//       )}

//       {/* <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//             Message
//           </label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition duration-200"
//         >
//           Send Message
//         </button>
//       </form> */}
//       <div className="mt-8">
//         <h2 className="text-4xl mb-4 text-center">More of Our Blogs</h2>
//         <ul className="list-disc list-inside flex justify-center items-center ">
//           <li><Link href="https://affiliate1.com" className="text-blue-600">Affiliate 1</Link></li>
//           <li><Link href="https://affiliate2.com" className="text-blue-600">Affiliate 2</Link></li>
//           <li><Link href="https://affiliate3.com" className="text-blue-600">Affiliate 3</Link></li>
//         </ul>
//       </div>
//       <div className="flex justify-center items-center flex-col gap-4 mt-28">
//         <h2 className="text-xl font-bold">Contact Information</h2>
//         <p>Email: <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a></p>
//         <p>Location: 123 SaaS Lane, Suite 456, City, Country</p>
//       </div>

      
//     </div>
//   );
// };

// export default ContactUs;



// // pages/contact.tsx
// 'use client';


// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({ name, email, message });
//     setSuccess(true);
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (

//     <div className="flex justify-center items-center  gap-8 mt-10 px-4 bg-orange/20">
        
//         <div className="flex  items-center gap-8 mt-5 px-4 ">
//         <div className="mt-12">
//             <h2 className="text-4xl text-center ">More of Our Blogs</h2>
            
//             <ul className="mt-10 list-inside flex flex-col items-center space-y-2">
//             <li><Link href="/blogs/11" className="text-gray-700 hover:underline">AI for Customer Service</Link></li>
//             <li><Link href="/blogs/7" className="text-gray-700 hover:underline">Conversational AI</Link></li>
//             <li><Link href="/blogs/11" className="text-gray-700 hover:underline">AI in Vision Pro</Link></li>
//             </ul>
//         </div>
        
       
        
//         {/* {success && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
//             <strong className="font-bold">Success!</strong>
//             <span className="block sm:inline"> Your message has been sent.</span>
//             </div>
//         )} */}

//         {/* <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
//             <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-300 transition duration-200"
//             />
//             </div>
//             <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-300 transition duration-200"
//             />
//             </div>
//             <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-300 transition duration-200"
//             />
//             </div>
//             <button
//             type="submit"
//             className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition duration-200"
//             >
//             Send Message
//             </button>
//         </form> */}

        

//         <div className="flex justify-center items-center flex-col gap-4 mt-12 bg-gray-275 p-6 rounded-lg shadow-md">
//         <h1 className="text-4xl text-center text-gray-800">Contact Us
//         <p className="mt-4 text-gray-400 text-center text-2xl">
//             We'd love to Connect with you! 
//         </p>
//         </h1>
//             <p className='text-l text-center text-gray-700'>Email: <a href="mailto:support@example.com" className="text-gray-800 hover:underline">support@example.com</a></p>

//             <p className='text-l text-center text-gray-700'>Location: IES IPS Academy, Indore, India</p>
//         </div>
//         </div>
//         <footer className="mt-10 text-center text-gray-700 text-sm">
//         <p>&copy; {new Date().getFullYear()} Corinna-Ai. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;


// components/Footer.js
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// const ContactUs = () => {
//     return (
//       <footer className="bg-orange/20 text-white p-10 mt-10 rounded-3xl shadow-xl w-35 h-35">
//         <div className="flex justify-between items-center border-b border-gray-600 pb-5 mb-5 ">
//           <span className="text-gray-800 text-center text-smgap-4 mt-12 bg-gray-275
//            p-6 rounded-lg shadow-md ml-2">HEARD ENOUGH?</span>
//           <a href='mailto:faizanshaikh008007@gmail.com'><h2 className="text-3xl text-gray-800 text-center gap-4 mt-12 bg-gray-275 
//           p-6 rounded-lg shadow-md mr-24 hover:text-orange/100">Contact us</h2></a>
          
          
//           <a href="mailto:faizanshaikh008007@gmail.com" className="bg-[#f3d299] rounded-full w-10 h-10 
//           flex justify-center cursor:pointer items-center hover:scale-125 transition duration-300 
//           gap-4 mt-14 bg-gray-275 p-6 rounded-lg shadow-md  hover:text-orange/100 mr-3 ">
//             <span className="text-2xl">&#x2192;</span>
//           </a>
//         </div>
  
//         <div className="flex grid grid-cols-1 md:grid-cols-4 text-gray-800 gap-8">
//           <div>
//           <Image
//           src="/images/logo.png"
//           alt="LOGO"
//           sizes="100vw"
//           style={{
//             width: '200px',
//             height: 'auto',
//           }}
//           width={0}
//           height={0}
//         />
        
//             <h3 className="text-l font-semibold">The agency for impatient brands®</h3>
//           </div>
  
//           <div>
//             <h4 className="text-lg font-medium text-bold text-gray-800 pb-5">
//                 <a href='https://study-notion-faizan7077.vercel.app/' className='hover:text-orange/100 text-2xl '>Study Notion</a></h4>
//             <p>
//               <a href="mailto:faizanstudyn@gmail.com" className="hover:text-orange/100 ">
//                 faizanstudyn@gmail.com
//               </a>
//             </p>
//             <p>+91 9967997949</p>
//             <a href='https://ipsacademy.org' className='hover:text-orange/100'>IES IPS Academy<br/>Indore<p></p>
//             </a>
            
//             <a href="" className="text-gray-800 text-xl-bold hover:text-orange/100 pt-20">
//               SEE ON MAP
//             </a>
//           </div>
  
//           <div>
//             <h4 className="text-2xl font-medium pb-5"><a href='https://faiz7077-livedocs.vercel.app/sign-in'
//              className='hover:text-orange/100'>LiveDocs</a></h4>
//             <p>
//                 <a href="mailto:faizanstudyn@gmail.com" className="hover:text-orange/100 ">
//                 faizanstudyn@gmail.com
//                 </a>
//             </p>
//             <p>+91 9967997949</p>
//             <a href='https://ipsacademy.org' className='hover:text-orange/100'>IES IPS Academy<br/>Indore<p></p>
//             </a>
//             <a href="" className="text-gray-800 text-xl-bold hover:text-orange/100 pt-20">
//               SEE ON MAP
//             </a>
//           </div>
  
//           <div className='flex flex-col'>
//             <h4 className="text-2xl text-gray-800 text-bold ">Enhance your Business</h4>
//             <a href="/signup" className="flex justify-center text-gray-1000  hover:text-orange/100 pt-5">
//               Get Started for Free &#x2192;
//             </a>
//             <div className="flex  gap-1 mt-4">

//                 <div className="div">
//                     <a href="#" className="text-gray-1000 text-xl hover:text-orange/100">
//                     <p className='flex justify-center flex-row text-bold text-2xl pt-5'>Our Socials:</p>
//                     </a>
//                     <div className='mt-3 flex gap-2'>
//                         <a href="#" className="hover:text-orange/100 pl-1">LinkedIN </a>
//                         <a href="#" className="hover:text-orange/100 pl-1">Github </a>
//                         <a href="#" className="hover:text-orange/100 pl-1">Facebook</a>
//                         <a href="#" className="hover:text-orange/100 pl-1">Twitter</a>
//                     </div>
                   
//                 </div>

//             </div>

//           </div>
//         </div>
//         <footer className="mt-10 text-center text-gray-700 text-sm">
//              <p>&copy; {new Date().getFullYear()} Corinna-Ai. All rights reserved.</p>
//         </footer>
//       </footer>
//     );
//   };
  
//   export default ContactUs;
  
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactUs = () => {
    return (
        <footer className="bg-orange/20 text-white p-10 mt-10 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-5 mb-5">
                <span className="text-gray-800 text-center text-sm gap-4 mt-12 bg-gray-275 p-6 rounded-lg shadow-md">
                    HEARD ENOUGH?
                </span>
                <div className="flex flex-col md:flex-row md:items-center">
                    <a
                        href='mailto:faizanshaikh008007@gmail.com'
                        className="text-3xl text-gray-800 text-center gap-4 mt-12 bg-gray-275 p-6 rounded-lg shadow-md hover:text-orange/100 md:mr-4"
                    >
                        Contact us
                    </a>

                    {/* <a
                        href="mailto:faizanshaikh008007@gmail.com"
                        className="bg-[#f3d299] rounded-full w-10 h-10 flex justify-center cursor-pointer items-center hover:scale-125 transition duration-300 mt-4 md:mt-0"
                    >
                        <span className="text-2xl">&#x2192;</span>
                    </a> */}
                </div>
                <a
                        href="mailto:faizanshaikh008007@gmail.com"
                        className="bg-[#f3d299] rounded-full w-10 h-10 flex justify-center cursor-pointer items-center hover:scale-125 transition duration-300 mt-4 md:mt-12"
                    >
                        <span className="text-2xl">&#x2192;</span>
                    </a>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 text-gray-800 gap-8">
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/logo.png"
                        alt="LOGO"
                        sizes="100vw"
                        style={{
                            width: '200px',
                            height: 'auto',
                        }}
                        width={0}
                        height={0}
                    />
                    <h3 className="text-l font-semibold text-center">The agency for impatient brands®</h3>
                </div>

                <div>
                    <h4 className="text-lg font-medium text-bold text-gray-800 pb-5">
                        <a href='https://study-notion-faizan7077.vercel.app/' className='hover:text-orange/100 text-2xl'>
                            Study Notion
                        </a>
                    </h4>
                    <p>
                        <a href="mailto:faizanstudyn@gmail.com" className="hover:text-orange/100 ">
                            faizanstudyn@gmail.com
                        </a>
                    </p>
                    <p>+91 9967997949</p>
                    <a href='https://ipsacademy.org' className='hover:text-orange/100'>
                        IES IPS Academy<br />Indore
                    </a>
                    <a href="#" className="text-gray-800 text-xl-bold hover:text-orange/100 pt-20">
                        SEE ON MAP
                    </a>
                </div>

                <div>
                    <h4 className="text-2xl font-medium pb-5">
                        <a href='https://faiz7077-livedocs.vercel.app/sign-in' className='hover:text-orange/100'>
                            LiveDocs
                        </a>
                    </h4>
                    <p>
                        <a href="mailto:faizanstudyn@gmail.com" className="hover:text-orange/100 ">
                            faizanstudyn@gmail.com
                        </a>
                    </p>
                    <p>+91 9967997949</p>
                    <a href='https://ipsacademy.org' className='hover:text-orange/100'>
                        IES IPS Academy<br />Indore
                    </a>
                    <a href="#" className="text-gray-800 text-xl-bold hover:text-orange/100 pt-20">
                        SEE ON MAP
                    </a>
                </div>

                <div className='flex flex-col'>
                    <h4 className="text-2xl text-gray-800 text-bold">Enhance your Business</h4>
                    <Link href="/signup" className="flex justify-center text-gray-1000 hover:text-orange/100 pt-5">
                        Get Started for Free &#x2192;
                    </Link>
                    <div className="flex gap-1 mt-4">
                        <div className="div">
                            <p className='flex justify-center flex-row text-bold text-2xl pt-5 ml-10'>Our Socials:</p>
                            <div className='mt-3 ml-3 flex gap-2 flex-wrap'>
                                <a href="#" className="hover:text-orange/100 pl-1">LinkedIn</a>
                                <a href="#" className="hover:text-orange/100 pl-1">Github</a>
                                {/* <a href="#" className="hover:text-orange/100 pl-1">Facebook</a> */}
                                <a href="#" className="hover:text-orange/100 pl-1">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-10 text-center text-gray-700 text-sm">
                <p>&copy; {new Date().getFullYear()} Corinna-Ai. All rights reserved.</p>
            </footer>
        </footer>
    );
};

export default ContactUs;
