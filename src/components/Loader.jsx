
import { Html, useProgress } from "@react-three/drei";


const Loader = () => {
  const {progress} =useProgress();

  return (
      <Html>
      <span className="Canvas-load "></span>
      <p style={{
        fontSize: 15,
        color : 'white',
        fontWeight : 'bold',
        marginTop : 30
      }}>
        {progress.toFixed(2)}%
      </p>
      </Html>
  )
}

export default Loader