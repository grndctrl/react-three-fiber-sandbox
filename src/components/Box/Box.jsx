import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

const Box = (props) => {
  const mesh = useRef()

  const [active, setActive] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <line
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      onClick={(e) => setActive(!active)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <lineDashedMaterial scale={4} gapSize={0.5} dashSize={0.5} color={0.0} />
    </line>
  )
}

export default Box
