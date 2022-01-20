import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { HomeUseStyles } from "../../pages/Home";
import classNames from "classnames";
import ImageIcon from "@mui/icons-material/ImageOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import IconButton from "@material-ui/core/IconButton";

interface TextAreaBlockProps {
	classes: ReturnType<typeof HomeUseStyles>;
}

export const TextArea: React.FC<TextAreaBlockProps> = ({
	classes,
}: TextAreaBlockProps): React.ReactElement => {
	const [text, setText] = React.useState<string>("");
	const textLimit = Math.round((text.length / 280) * 100);

	const handelChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
		if (e.currentTarget) {
			setText(e.currentTarget.value);
		}
	};

	return (
		<Paper>
			<div className={classes.addForm}>
				<div className={classes.addFormBody}>
					<Avatar
						className={classes.tweetAvatar}
						alt={`User avatar Tester`}
						src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VwZXJtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					/>
					<TextareaAutosize
						onChange={handelChangeText}
						className={classes.addFormTextarea}
						placeholder="What`s happening?"
						value={text}
					/>
				</div>
				<div className={classes.addFormBottom}>
					<div
						className={classNames(classes.tweet, classes.addFormBottomActions)}
					>
						<IconButton style={{ color: "#1DA1F2" }}>
							<ImageIcon style={{ fontSize: 26 }} />
						</IconButton>
						<IconButton style={{ color: "#1DA1F2" }}>
							<EmojiIcon style={{ fontSize: 26 }} />
						</IconButton>
					</div>
					<div className={classes.addFormBottomRigth}>
						{text && (
							<>
								<span>280</span>
								<div className={classes.addFormCircleProgress}>
									<CircularProgress
										variant="determinate"
										size={20}
										thickness={5}
										value={textLimit > 100 ? 100 : textLimit}
										style={textLimit === 100 ? { color: "red" } : undefined}
									/>
									<CircularProgress
										style={{ color: "rgba(0, 0, 0, 0.1)" }}
										variant="determinate"
										size={20}
										thickness={5}
										value={100}
									/>
								</div>
							</>
						)}
						<Button disabled={textLimit >= 100} variant="contained">
							Tweet
						</Button>
					</div>
				</div>
			</div>
			<div className={classes.addFormBottomLine} />
		</Paper>
	);
};
