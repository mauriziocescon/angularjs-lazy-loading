export class Enum {
	private value: string;

	constructor(value: string) {
		this.value = value;
	}

	public toString(): string {
		return this.value;
	}

	public static toEnum(val: string): Enum {
		if (val == undefined || val == null)
			return undefined;

		return new Enum(val);
	}
}