import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

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
				<TextInput
					style={styles.inputText}
					placeholder="Enter Task"
					value={goalsInput}
					onChangeText={goalInputHandler}
				/>
				<View
					style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}
				>
					<Button title="Add Goal" onPress={addGoalHandler} />
					<Button title="Cancel" color="#E21717" onPress={props.onCancel} />
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		borderColor: "#ddd",
		borderBottomWidth: 1,
		width: "100%",
		padding: 20,
		justifyContent: "center",
		paddingTop: 30,
		flexDirection: "column",
		gap: 20,
		backgroundColor: "#50DBB4",
	},
	inputText: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 5,
		backgroundColor: "#fff",
	},
});
