import { useState, useEffect, useRef } from "react";
import { cursorTo } from "readline";

export const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<null | Point>(null);

    const onMouseDown = (): void => setMouseDown(true);
    const mouseUpHandler = () => {
        setMouseDown(false);
        prevPoint.current = null;
    };

    const clear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!mouseDown) return;
            // console.log({ x: e.clientX, y: e.clientY });
            const currentPoint = computePointInCanvas(e);
            const ctx = canvasRef.current?.getContext('2d');
            // logic to check if exist
            if (!ctx || !currentPoint) return;
            onDraw({ ctx, currentPoint, prevPoint: prevPoint.current });
            // set previous point to current point for smooth drawing
            prevPoint.current = currentPoint;
        };

        const computePointInCanvas = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            // get the coordinate based on canvas not the page
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            return { x, y };
        };

        // Add event listeners
        canvasRef.current?.addEventListener('mousemove', handler);
        window.addEventListener('mouseup', mouseUpHandler);

        // Clean up for memory leak
        return () => {
            canvasRef.current?.removeEventListener('mousemove', handler);
            window.removeEventListener('mouseup', mouseUpHandler);
        }
    }, [onDraw]);

    return { canvasRef, onMouseDown, clear };
};