import { View, Text, Pressable, StyleSheet } from "react-native";

export default function GoalItem(props) {
	return (
		<View style={styles.goalItems}>
			<Pressable
				android_ripple={{ color: "#fff" }}
				onPress={props.onDeleteGoal.bind(this, props.id)}
                //for IOS 👇
                style={(pressed) => pressed && styles.pressedItem}
			>
				<Text style={{ color: "#fff", padding: 8 }}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItems: {
		margin: 5,
		backgroundColor: "#5DA3FA",
		borderRadius: 3,
	},
    pressedItem:{

    }
});
