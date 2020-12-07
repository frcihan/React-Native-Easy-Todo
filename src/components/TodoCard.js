import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { todo_card } from "../styles"

const TodoCard = (props) => {
    return (
        <TouchableOpacity 
            style={[todo_card.container, {backgroundColor: props.data.isDone ? "#b39ddb" : "#5e35b1"}]}
            onPress={() => props.onDone()}
            onLongPress={() => props.onRemove()}
        >
            <View style={todo_card.textBox}>
                <TouchableOpacity onPress={() => props.onDone()}>
                    <Image 
                        style={todo_card.image} 
                        source={props.data.isDone ? require("../assets/circle-tick.png") : require("../assets/circle.png") }
                        tintColor="#ffb300"
                    />
                </TouchableOpacity>
                <Text style={[
                    todo_card.text, 
                    {textDecorationLine: props.data.isDone ? "line-through" : null},
                    ]}
                >
                    {props.data.todo}
                </Text>
            </View>
            <TouchableOpacity onPress={() => props.onRemove()}>
                <Image 
                    style={todo_card.image} 
                    source={require("../assets/dustbin.png")}
                    tintColor="#ffb300"
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export { TodoCard };