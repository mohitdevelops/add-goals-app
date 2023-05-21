import { useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [goalsList, setGoalsList] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	function closeModalHandler() {
		setIsModalVisible(false);
	}

	const addGoalHandler = (goalsInput) => {
		setGoalsList((currentGoals) => [
			...currentGoals,
			{ text: goalsInput, id: Math.random().toString() },
		]);
		closeModalHandler();
	};

	const deleteGoalHandler = (id) => {
		setGoalsList((curr) => {
			return curr.filter((goal) => goal.id !== id);
		});
	};

	const addGoal = () => {
		setIsModalVisible(true);
	};

	return (
		<>
			<StatusBar style="dark"/>
			<View style={styles.container}>
				<Button title="Add New Goal" color={"#2827CC"} onPress={addGoal} />
				{isModalVisible && (
					<GoalInput
						onAddGoal={addGoalHandler}
						visible={isModalVisible}
						onCancel={closeModalHandler}
					/>
				)}
				<View style={styles.listContainer}>
					<FlatList
						data={goalsList}
						renderItem={(item) => {
							return (
								<GoalItem
									text={item.item.text}
									onDeleteGoal={deleteGoalHandler}
									id={item.item.id}
								/>
							);
						}}
						keyExtractor={(el, index) => {
							return el.id; //to get the key if the data is coming from an API
						}}
						alwaysBounceVertical={true}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#03203C",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 20,
	},

	listContainer: {
		flex: 6,
		width: "100%",
		padding: 20,
	},
});
