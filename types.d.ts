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

type DrawLineProps = Draw & {
    color: string
  }

export { Draw, Point, DrawLine, DrawLineProps }