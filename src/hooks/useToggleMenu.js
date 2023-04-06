import React from "react"
const {useState} = React

export const useToggleMenu = (initialValue) => {
	const [toggleMenu, setToggleMenu] = useState(initialValue)
	return [toggleMenu, setToggleMenu]
}
