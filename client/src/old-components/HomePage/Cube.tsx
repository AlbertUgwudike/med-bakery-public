import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/*
	For this to work I had to npm install react-three-fiber
*/

const Box = () => {

    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

	// mesh needs to be rendered withni canvas
	const _Box = () => {
		useFrame((_, __) => (ref.current.rotation.x += 0.01))
		return (
			<mesh
				ref={ref}
				scale={clicked ? 1.5 : 1}
				onClick={(event) => click(!clicked)}
				onPointerOver={(event) => hover(true)}
				onPointerOut={(event) => hover(false)}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
			</mesh>
		);
	}

    return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<_Box />
		</Canvas>
    )
}

export default Box;