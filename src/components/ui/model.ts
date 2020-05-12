import { AbstractModel } from "../../interfaces";
import {injectable} from "inversify";

const UIModelKeys = {
	SHAPES_PER_SECOND: "SHAPES_PER_SECOND",
	GRAVITY_VALUE: "GRAVITY_VALUE",
};

@injectable()
export class UIModel extends AbstractModel {
	constructor() {
		super();
	}

	onInit(): void | Promise<void> {
		this.shaperPerSecond = 1;
		this.gravityValue = 1;
	}

	set shaperPerSecond(value: number) {
		this.set(UIModelKeys.SHAPES_PER_SECOND, value);
	}

	get shaperPerSecond(): number {
		return this.get(UIModelKeys.SHAPES_PER_SECOND);
	}

	set gravityValue(value: number) {
		this.set(UIModelKeys.GRAVITY_VALUE, value);
	}

	get gravityValue(): number {
		return this.get(UIModelKeys.GRAVITY_VALUE);
	}
}
