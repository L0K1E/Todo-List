export const formatDate = date => {
	const dateArr = date.split("/");
	return dateArr.join("-");
};
