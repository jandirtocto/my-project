export default function loader() {
	const locale = navigator.language;

	const getLocation = () => {
		return new Promise((success, fail) => {
			navigator.geolocation.getCurrentPosition(
				(data) => {
					success(data);
				},
				(error) => {
					fail(error);
				}
			);
		});
	};

	return { language: locale, getLocation };
}
