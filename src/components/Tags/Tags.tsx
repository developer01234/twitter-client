import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { HomeUseStyles } from "../../pages/HomeTheme";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import { selectIsLoaded, selectTagsItems } from "../../store/tags/selectors";

interface TagsProps {
	classes: ReturnType<typeof HomeUseStyles>;
}

export const Tags: React.FC<TagsProps> = ({
	classes,
}): React.ReactElement | null => {
	const items = useSelector(selectTagsItems);
	const isLoaded = useSelector(selectIsLoaded);

	if (!isLoaded) {
		return null;
	}

	return (
		<Paper className={classes.rightSideBlock}>
			<Paper className={classes.rightSideBlockHeader}>
				<b>Trends for you</b>
			</Paper>
			<List>
				{items.map((obj) => (
					<>
						<ListItem key={obj._id} className={classes.rightSideBlockItem}>
							<ListItemText
								primary={obj.name}
								secondary={
									<Typography component="span" variant="body2">
										tweets: {obj.count}
									</Typography>
								}
							/>
						</ListItem>
					</>
				))}
				<Divider component="li" />
			</List>
		</Paper>
	);
};
