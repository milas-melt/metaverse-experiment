const Plane = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[80, 80]} />
            <meshStandardMaterial color={"#000000"} /> 
            
        </mesh>
    ); // previously <meshStandardMaterial color={"#404040"} /> 
}

export default Plane;