import {inject, injectable} from "inversify";
import {AbstractController} from "../../interfaces";
import {RainBoxView} from "./view";
import {StageService} from "../../services";
import {ServiceTypes} from "../../types";
import {RainBoxTypes} from "./types";
import {randomColor} from "../../utils/random";

@injectable()
export class RainBoxController implements AbstractController {
	constructor(
		@inject(ServiceTypes.Stage) private stageService: StageService,
		@inject(RainBoxTypes.View) private rainBoxView: RainBoxView,
	) {

	}

	onInit() {
		this.stageService.hitBox.on('mousedown', this.onClick, this);
	}

	onDestroy() {
	}

	private onClick($event: PIXI.interaction.InteractionEvent): void {
		this.rainBoxView.addNewShape($event.data.global.x, $event.data.global.y, randomColor());
	}
}
