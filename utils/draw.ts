import { DetectedObject } from "@tensorflow-models/coco-ssd";

export function drawOnCanvas(
  mirrored: boolean,
  predictions: DetectedObject[],
  ctx: CanvasRenderingContext2D | null | undefined
) {
  predictions.forEach((detectedObject: DetectedObject) => {
    const { class: name, bbox, score } = detectedObject;
    if (name !== "person") {
      return;
    }

    const [x, y, width, height] = bbox;
    if (ctx) {
      ctx.beginPath();
      ctx.fillStyle = "#FF0F0F";
      ctx.globalAlpha = 0.4;
      
      mirrored
        ? ctx.roundRect(ctx.canvas.width - x, y, -width, height, 8)
        : ctx.roundRect(x, y, width, height, 8);

      ctx.roundRect(x, y, width, height, 8);

      ctx.fill();

      ctx.font = "12px Courier New";
      ctx.globalAlpha = 1;

      ctx.fillText(name, x, y);
    }
  });
}