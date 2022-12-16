import { useNavigation} from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import {  FontAwesome5} from '@expo/vector-icons';
import { RadioButton } from "react-native-paper";
import styles from './Curative.style';

export default function Curative ({nav}){
    const navigation = useNavigation();
    const [value, setValue] = useState('first');
    return(
        <View>
            <View style={styles.box1}>
            <FontAwesome5 name="user" size={40} color={'#0C008C'}/>
                <Text style={styles.txt1}>Olá Usuario</Text>
                
            </View>
            <View style={styles.box2}>
                <FontAwesome5 name="band-aid" size={50} color={'#0C008C'}/>
                <Text style={styles.txt1}>Curativos</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.txt2}>Qual o tipo de procedimento?</Text>
            </View>
            <View style={styles.box4}>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item label="Retirada de Pontos" value="first" />
                <RadioButton.Item label="Curativo Simples" value="second" />
                <RadioButton.Item label="Curativo Cirúrgico" value="third" />
                <RadioButton.Item label="Curativo Médio/Grande" value="fourth" />
            </RadioButton.Group>
            </View>
        </View>

    );
}


