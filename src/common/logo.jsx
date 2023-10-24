import React from 'react';

export default function Logo({ height, width, ...attr}) {
	return (
		<div {...attr}>
			<img
				style={{height: height, width: width}}
				src='https://i.deeezy.com/uploads/thumbnails/173/17366-85760-a877ec9b502e2b267226680c0cd55fb8.webp'
				alt='logo'
			/>
		</div>
	);
}
