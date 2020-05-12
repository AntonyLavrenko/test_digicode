import {injectable} from "inversify";

@injectable()
export abstract class AbstractModel {
	private readonly _map: Map<string, number> = new Map();

	abstract onInit(): void | Promise<void>;

	get(key: string): number {
		return this._map.get(key);
	}

	set(key: string, value: number): void {
		this._map.set(key, value);
	}

	has(key: string): boolean {
		return this._map.has(key);
	}
}
