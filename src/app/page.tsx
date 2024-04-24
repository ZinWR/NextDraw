'use client' // needed for NextJS 13

import { FC, useState } from 'react';
import { useDraw } from '../../hooks/useDraw';
import { ChromePicker } from 'react-color';

interface pageProps {
  
};

const page: FC<pageProps> = ({}) => {
  const [color, setColor] = useState<string>('#000');
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw): void {
    const { x: currX, y: currY } = currentPoint;
    const lineWidth = 5;

    // draw
    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    
    ctx.fillStyle = color;
    ctx.beginPath();
    // (x, y, radius, startAngle, endAngle)
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center'>
      <div className='flex flex-col gap-10 pr-10'>
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)}/>
        <button type='button' className='p-2 rounded-md border border-black text-black' onClick={clear}> Clear Canvas</button>
      </div>
      <canvas 
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  );
};

export default page;