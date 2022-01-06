import React from "react";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { RegisterUseStyles } from "../../pages/Register";
import IconButton from "@material-ui/core/IconButton";

interface DialogBlockProps {
	classes?: ReturnType<typeof RegisterUseStyles>;
	title: string;
	children: React.ReactNode;
	open?: boolean;
	onClose: () => void;
}

export const DialogBlock: React.FC<DialogBlockProps> = ({
	title,
	children,
	onClose,
	open = false,
}: DialogBlockProps): React.ReactElement | null => {
	if (!open) {
		return null;
	}

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle style={{ fontWeight: 800 }} id="form-dialog-title">
				<IconButton
					onClick={onClose}
					style={{
						color: "rgb(26, 145,218)",
						paddingRight: 30,
						cursor: "pointer",
					}}
					aria-label="close"
				>
					<CloseIcon style={{ fontSize: 26 }} />
				</IconButton>
				{title}
				<hr />
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};
