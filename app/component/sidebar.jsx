import Image from "next/image";
import React from "react";

import { Twitter, Linkedin, Facebook, Email, Envelope } from "./icons/";

const Sidebar = ({ data }) => {
	const { name, description, education, contactLinks } = data;
	return (
		<div className='bg-blue flex flex-col w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
			<div className="text-white flex-col p-10">
				<Image
				  priority
				  width={300}
				  height={300}
				 // className='rounded-full h-full mb-6'
				 // src='/images/jpg'
				 // alt="jpg"
				/>
				<h1 className="mb-2">{name}</h1>
				<h2 className="mb-8">{description}</h2>
				<p className="mb-2">{education[0]}</p>
				<p className="mb-2">{education[1]}</p>
				<div className="text-white mb-4 mt-4 text-center mb-4 mt-4 sm:mt-8 items-center">
					<h3 className="mb-2"> Contact Me</h3>
					<div className="flex flex-row justify-center gap-2">
						<a 
						    className="icons-contactme"
						     href={contactLinks?.[0]}
						    arial-label={'twitter link'}
						>
						 <Twitter />
					    </a>
					    <a className="icons-contactme" href={contactLinks?.[1]} arial-label={'email link'}>
						 <Envelope />
					    </a>
					    <a className="icons-contactme" href={contactLinks?.[2]} arial-label={'linkedin link'}>
						 <Linkedin />
					    </a>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
