'use client' // needed for NextJS 13

import { FC } from 'react';
import { useDraw } from '../../hooks/useDraw';

interface pageProps {
  
};

const page: FC<pageProps> = ({}) => {

  const { canvasRef } = useDraw();

  const drawLine = ({ prevPoint, currentPoint, ctx }: Draw) => {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = '#000';
    const lineWidth = 5;

    // draw
    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    
    ctx.fillStyle = lineColor;
    ctx.beginPath();
    // (x, y, radius, startAngle, endAngle)
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className='w-screen h-screen bg-white flex justify-center item-center'>
      <canvas 
        ref={canvasRef}
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  );
};

export default page;