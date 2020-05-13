import {injectable, decorate} from "inversify";
import * as EventEmitter from "eventemitter3";
import {ServiceInterface} from "../interfaces/AbstractService";

import * as PIXI from "pixi.js";

decorate(injectable(), EventEmitter);

@injectable()
export class StageService extends EventEmitter implements ServiceInterface {
	private canvasHtmlID = 'container';
	private canvasHtmlBlock: HTMLElement;

	private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;

	stage: PIXI.Container;
	reelsContainer: PIXI.Container;
	hitBox: PIXI.Graphics;

	width = 800;
	height = 500;

	constructor() {
		super();
	}

	onInit(): void {
		this.canvasHtmlBlock = document.getElementById(this.canvasHtmlID);

		this.renderer = PIXI.autoDetectRenderer(
			this.width,
			this.height,
			{transparent: true/*, powerPreference: "high-performance"*/}
		);

		this.canvasHtmlBlock.appendChild(this.renderer.view);

		this.stage = new PIXI.Container();

		const hitBox = new PIXI.Graphics();
		hitBox.beginFill(0xFFFFFF);
		hitBox.drawRect(0, 0, this.width, this.height);
		hitBox.endFill();

		this.hitBox = this.stage.addChild(hitBox);
		this.reelsContainer = this.stage.addChild(new PIXI.Container());

		this.addTicker(this.render);
	}

	private render() {
		this.renderer.render(this.stage);
	}

	addTicker(fn: () => void, context: any = this): void {
		PIXI.ticker.shared.add(fn, context);
	}

	removeTicker(fn: () => void, context: any = this): void {
		PIXI.ticker.shared.remove(fn, context);
	}

	onDestroy(): void {
		this.removeTicker(this.render);
		PIXI.ticker.shared.destroy();
	}

}
