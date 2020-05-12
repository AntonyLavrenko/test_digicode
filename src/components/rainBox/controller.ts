import {injectable} from "inversify";
import {AbstractController} from "../../interfaces";
import {RainBoxModel} from "./model";
import {UIModel} from "../ui";
import {RainBoxView} from "./view";

@injectable()
export class RainBoxController implements AbstractController {
	constructor(
		private rainBoxModel: RainBoxModel,
		private rainBoxView: RainBoxView,
		private uiModel: UIModel,
	) {

	}

	onInit() {

	}

	onDestroy() {

	}


}
