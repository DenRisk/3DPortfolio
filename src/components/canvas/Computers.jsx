import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <div>Computers</div>
  )
}

export default Computers