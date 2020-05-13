export const triangle = (color: number) => {
	const graphics = new PIXI.Graphics();
	graphics.beginFill(color);
	graphics.moveTo(50, 350);
	graphics.lineTo(250, 350);
	graphics.lineTo(100, 400);
	graphics.lineTo(50, 350);
	graphics.closePath();
	graphics.endFill();
	graphics.pivot = new PIXI.Point(50, 350);
	return graphics;
};
