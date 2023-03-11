import React, { useId } from "react";
import Skills from "./skills";

const AboutMe = ({ data, skills }) => {
	const { title, body } = data;
	const id = useId();
	return (
		<section>
			<h2 className="mb-4"> {title} </h2>
			{body?.map((el, i) => (
				<p key={`${id}_${i}`} className='mb-6'>
					{el}
				</p>
			))}
		</section>
	);
};

export default AboutMe;
