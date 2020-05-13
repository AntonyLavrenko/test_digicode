export const circle = (color: number) => {
	const graphics = new PIXI.Graphics();
	graphics.lineStyle(0);
	graphics.beginFill(color, 1);
	graphics.drawCircle(0, 0, 50);
	graphics.endFill();
	return graphics;
};
