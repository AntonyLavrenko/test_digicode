export const randomColor = (): number => {
	return eval(`0x${Math.random().toString(16).slice(-6)}`);
};

export const randomNumber = (min:number, max:number):number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
