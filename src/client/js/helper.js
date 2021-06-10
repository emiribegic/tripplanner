export const convertDate = d => {
	const dateAndTime = new Date(d);
	const year = dateAndTime.getFullYear();
	const month = dateAndTime.getMonth();
	const date = dateAndTime.getDate();
	const timeStamp = new Date(year, month, date).getTime();
	return timeStamp;
};
