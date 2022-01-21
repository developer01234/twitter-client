import styled from "@mui/system/styled";
import TextField from "@mui/material/TextField";

export const SearchTwitter = styled(TextField)({
	input: {
		"& .MuiOutlinedInput-root": {
			borderRadius: 30,
			backgroundColor: "#E6ECF0",
			padding: 0,
			paddingLeft: 15,
			"&.Mui-focused": {
				backgroundColor: "#fff",
				"& fieldset": { borderWidth: 1, borderColor: "#1DA1F2" },
				"& svg path": { fill: "#1DA1F2" },
			},
		},
		"&:hover": {
			"& fieldset": { borderColor: "transparent" },
		},
		"& fieldset": {
			borderWidth: 1,
			borderColor: "#1DA1F2",
		},
	},
	"& .MuiOutlinedInput-input": { padding: "12px 14px 14px 5px" },
});
