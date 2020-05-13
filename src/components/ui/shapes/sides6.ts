export const sides6 = (color: number) => {
	const graphics = new PIXI.Graphics();
	graphics.beginFill(color, 1);
	graphics.drawStar(0, 0, 6, 50, 30);
	graphics.endFill();
	return graphics;
};
