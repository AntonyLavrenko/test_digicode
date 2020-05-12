import { AbstractController } from "../../interfaces";
import {injectable} from "inversify";
import {UIModel} from "./model";

@injectable()
export class UIController implements AbstractController {
	constructor(private uiModel: UIModel) {

	}

	set currentShapes(value: number) {
		document.getElementById("countShapes").innerText = String(value);
	}

	set surfaceAreaShapes(value: number) {
		document.getElementById("shapesArea").innerText = String(value);
	}

	onInit(): void {
		document.getElementById("countShapeDec")
			.addEventListener("click", this.countShapeDec, false);
		document.getElementById("countShapeInc")
			.addEventListener("click", this.countShapeInc, false);

		document.getElementById("countGravityDec")
			.addEventListener("click", this.countGravityDec, false);
		document.getElementById("countGravityInc")
			.addEventListener("click", this.countGravityInc, false);

		this.updateLabels();
	}

	onDestroy(): void {

	}

	private readonly countShapeDec = (): void => {
		if (this.uiModel.shaperPerSecond > 1) {
			this.uiModel.shaperPerSecond--;
			this.updateLabels();
		}
	}

	private readonly countShapeInc = (): void => {
		this.uiModel.shaperPerSecond++;
		this.updateLabels();
	}

	private readonly countGravityDec = (): void => {
		if (this.uiModel.gravityValue > 1) {
			this.uiModel.gravityValue--;
			this.updateLabels();
		}
	}

	private readonly countGravityInc = (): void => {
		this.uiModel.gravityValue++;
		this.updateLabels();
	}

	private updateLabels() {
		document.getElementById("countShapeValue").innerText = String(this.uiModel.shaperPerSecond);
		document.getElementById("countGravityValue").innerText = String(this.uiModel.gravityValue);
	}
}
