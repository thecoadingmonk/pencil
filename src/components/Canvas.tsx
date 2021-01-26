import React, { FC, useLayoutEffect, useRef } from 'react'

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.fillStyle = 'green'
      ctx.fillRect(10, 10, 150, 100)
    }
  })
  return <canvas id="canvas" ref={canvasRef} className="" />
}

export default Canvas
