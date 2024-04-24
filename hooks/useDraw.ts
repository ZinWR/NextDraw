import { useState, useEffect, useRef } from "react";

export const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<null | Point>(null);

    const onMouseDown = (): void => setMouseDown(true);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
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

        // Clean up for memory leak
        return () => canvasRef.current?.addEventListener('mousemove', handler);
    }, []);

    return { canvasRef, onMouseDown };
};