import {AbstractView} from "../../interfaces";
import {inject, injectable} from "inversify";
import {StageService} from "../../services";
import {UITypes} from "../ui/types";
import {IUIController, IUIModel} from "../ui/interfaces";
import {ServiceTypes} from "../../types";
import {randomColor, randomNumber} from "../../utils/random";
import {listShapes} from "../ui/shapes";

@injectable()
export class RainBoxView implements AbstractView {
	constructor(
		@inject(UITypes.Model) private uiModel: IUIModel,
		@inject(UITypes.Controller) private uiController: IUIController,
		@inject(ServiceTypes.Stage) private stageService: StageService,
	) {

	}

	onInit(): void {
		this.stageService.hitBox.interactive = true;
		this.stageService.hitBox.buttonMode = true;
		this.stageService.addTicker(this.render, this);
	}

	onDestroy(): void {
		this.stageService.removeTicker(this.render, this);
	}

	addNewShape(x: number = 0, y: number = 0, color = 0x000000): void {
		const randomIndex = randomNumber(0, listShapes.length - 1);
		const shape = listShapes[randomIndex](color);
		shape.x = x;
		shape.y = y;
		shape.interactive = true;
		shape.buttonMode = true;
		const bounds = shape.getBounds(true);
		// @ts-ignore
		shape["__area"] = bounds.width * bounds.height;

		this.stageService.reelsContainer.addChild(shape);
		shape.on('mousedown', () => {
			shape.parent.removeChild(shape);
		});
	}

	private render(): void {
		this.balancer();

		let areas = 0;
		for(let el of this.stageService.reelsContainer.children) {
			el.y+= this.uiModel.gravityValue;
			// @ts-ignore
			areas += el["__area"] || 0;
		}

		this.uiController.currentShapes = this.stageService.reelsContainer.children.length;
		this.uiController.surfaceAreaShapes = Math.round(areas);
	}

	private balancer(): void {
		let noNeed = this.stageService.reelsContainer.children.length - this.uiModel.shaperPerSecond;
		for(let el of this.stageService.reelsContainer.children) {
			if (el.y > this.stageService.height + 100) {
				if (noNeed > 0) {
					this.stageService.reelsContainer.removeChild(el);
					noNeed--;
				} else {
					el.y = -200;
				}
			}
		}

		if (noNeed > 0) {
			return;
		}

		for(let i = 0; i < Math.abs(noNeed); i++) {
			const color = randomColor();
			const x = randomNumber(0, this.stageService.width);
			this.addNewShape(x, -200, color);
		}
	}
}
