import {useState, useEffect} from "react"

const getTwoDigit = (amount) => {
	const twoDigit = amount.toLocaleString("en-Us", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})
	return [twoDigit[0], twoDigit[1]]
}

export const useClock = () => {
	const [date, setDate] = useState(new Date())
	const tick = () => setDate(new Date())

	const secsDigits = getTwoDigit(date.getSeconds())
	const minsDigits = getTwoDigit(date.getMinutes())
	const hoursDigits = getTwoDigit(date.getHours())

	useEffect(() => {
		const timerId = setInterval(tick, 1000)
	}, [])

	return {date, secsDigits, minsDigits, hoursDigits}
}
