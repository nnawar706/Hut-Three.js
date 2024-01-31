import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Loader from "../components/Loader.jsx";
import Hut from "../models/Hut.jsx";
import {adjustHutSize} from "../../lib/utils.js";

const Home = () => {
    const [scale, position, rotation] = adjustHutSize()
    return (
        <section className="w-full h-screen relative">
            <Canvas className="w-full h-screen bg-transparent"
                    camera={{ near: 0.1, far: 3000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 10, 1]} intensity={2} />
                    <ambientLight intensity={0.7} />
                    <hemisphereLight skyColor={"#4a04a1"} groundColor={"#000000"} intensity={2} />
                    <Hut position={position}
                    scale={scale} rotation={rotation}/>
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home