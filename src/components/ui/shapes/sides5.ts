export const sides5 = (color: number) => {
	const graphics = new PIXI.Graphics();
	const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];
	graphics.lineStyle(0);
	graphics.beginFill(color, 1);
	graphics.drawPolygon(path);
	graphics.endFill();
	graphics.pivot = new PIXI.Point(600, 370);
	return graphics;
}
