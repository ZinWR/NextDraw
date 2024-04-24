type Draw = {
    ctx: CanvasRenderingContext2D;
    currentPoint: Point;
    prevPoint: Point | null
}

type Point = { x: number; y: number }

type DrawLine = {
    currentPoint: Point;
    prevPoint: Point | null
    color: string
}