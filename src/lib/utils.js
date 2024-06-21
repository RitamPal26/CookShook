const COLORS = {
	green: {
		bg: "bg-[#ECF7D4]",
		badge: "bg-[#D6F497]",
	},
	orange: {
		bg: "bg-[#F9EFE1]",
		badge: "bg-[#F7E0B8]",
	},
	red: {
		bg: "bg-[#FBE5E7]",
		badge: "bg-[#FDC6C7]",
	},
    blue: {
        bg: "bg-[#E5F0FB]",
        badge: "bg-[#BDD7FD]",
    },
    purple: {
        bg: "bg-[#F4EDF9]",
        badge: "bg-[#D8CFF7]",
    },
    yellow: {
        bg: "bg-[#FFFAE6]",
        badge: "bg-[#FFD700]",
    },
    pink: {
        bg: "bg-[#FCE4EC]",
        badge: "bg-[#F8BBD0]",
    },
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};