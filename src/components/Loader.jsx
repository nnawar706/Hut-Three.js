import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        // using drei to convert non-3D object into 3D object to show inside a canvas
        <Html>
            <div className="flex justify-center items-center">
                <div className="w-20 h-20 border-2 border-opacity-20 border-purple-500
            border-t-purple-500 rounded-full animate-spin"/>
            </div>
        </Html>
    )
}

export default Loader