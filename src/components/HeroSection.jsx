import { useState } from 'react'
import PlaneViewer from './PlaneViewer'

export default function HeroSection() {
  const [targetPosition, setTargetPosition] = useState([0, 0, 0])

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8">Operman</h1>
      <div className="w-full h-[60vh]">
        <PlaneViewer targetPosition={targetPosition} />
      </div>
      <div className="flex space-x-4 mt-8">
        <button onClick={() => setTargetPosition([1, 0, 0])} className="px-4 py-2 bg-blue-500 rounded">Point 1</button>
        <button onClick={() => setTargetPosition([-1, 0, 0])} className="px-4 py-2 bg-green-500 rounded">Point 2</button>
        <button onClick={() => setTargetPosition([0, 1, 0])} className="px-4 py-2 bg-red-500 rounded">Point 3</button>
        <button onClick={() => setTargetPosition([0, -1, 0])} className="px-4 py-2 bg-yellow-500 rounded">Point 4</button>
      </div>
    </div>
  )
}
