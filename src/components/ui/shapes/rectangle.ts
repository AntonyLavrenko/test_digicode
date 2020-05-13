export const rectangle = (color: number) => {
	const graphics = new PIXI.Graphics();
	graphics.beginFill(color);
	graphics.drawRect(0, 0, 100, 100);
	graphics.endFill();
	return graphics;
};
