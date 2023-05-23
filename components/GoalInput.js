import { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
	Text,
	Pressable,
} from "react-native";

export default function GoalInput(props) {
	const [goalsInput, setGoalsInput] = useState("");

	const goalInputHandler = (goal) => {
		setGoalsInput(goal);
	};

	const addGoalHandler = () => {
		props.onAddGoal(goalsInput);
		setGoalsInput("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
					<Text style={{ color: "#fff", fontWeight: 600, fontSize: 25 }}>
						Add Your Goals
					</Text>
					<Image
						source={require("../assets/target.png")}
						style={{ width: 60, height: 60 }}
						resizeMode="contain"
					/>
				</View>
				<TextInput
					style={styles.inputText}
					placeholder="Enter Task"
					value={goalsInput}
					onChangeText={goalInputHandler}
				/>
				<View
					style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}
				>
					<Pressable
						android_ripple={{ color: "#fff" }}
						style={styles.modalBtn}
						onPress={addGoalHandler}
					>
						<Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
							Add
						</Text>
					</Pressable>
					<Pressable
						android_ripple={{ color: "#fff" }}
						style={[styles.modalBtn, styles.redBtn]}
						onPress={props.onCancel}
					>
						<Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
							Cancel
						</Text>
					</Pressable>
					{/* <Button title="Add" color="#4682B4"   />
					<Button title="Cancel" color="#DC143C"  /> */}
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "#23272A",
		flex: 1,
		borderColor: "#ddd",
		borderBottomWidth: 1,
		width: "100%",
		padding: 20,
		justifyContent: "center",
		paddingTop: 30,
		flexDirection: "column",
		gap: 20,
		alignItems: "center",
	},
	inputText: {
		borderWidth: 1,
		borderColor: "#ccc",
		backgroundColor: "#fff",
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 100,
		width: "100%",
		fontSize: 18,
	},
	modalBtn: {
		backgroundColor: "#4682B4",
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 100,
	},
	redBtn: {
		backgroundColor: "#DC143C",
	},
});
