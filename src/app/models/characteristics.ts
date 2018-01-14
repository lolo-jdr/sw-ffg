export class Characteristic {

	key: string;
	label: string;
	description: string;

	value: number = 0;

	constructor(characteristic: any) {
		this.key = characteristic.key;
		this.label = characteristic.label;
		this.description = characteristic.description;
	}

	public setValue(value: number) {
		this.value = value;
	}
}