import { useState } from "react";
import {
	Button,
	FlatList,
	Pressable,
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
		if (goalsInput === "") return;
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
			<StatusBar style="light" />
			<View style={styles.container}>
				<View style={styles.addBtnBox}>
					<Pressable
						onPress={addGoal}
						style={styles.addGoalBtn}
						android_ripple={{ color: "#fff" }}
					>
						<Text style={{ color: "#fff", fontSize: 20, }}>Add New Goal</Text>
					</Pressable>
				</View>
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
		backgroundColor: "#23272A",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 20,
	},

	listContainer: {
		flex: 6,
		width: "100%",
		padding: 20,
	},
	addBtnBox: {
		marginTop: 50,
		overflow: "hidden",
		borderRadius: 100,
	},
	addGoalBtn: {
		backgroundColor: "#7289DA",
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 30,
		paddingLeft: 30,
		borderRadius: 100,
	},
});

//dark 23272A
//main 7289DA
//red DC143C
//l 4682B4
