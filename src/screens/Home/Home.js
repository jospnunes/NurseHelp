import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AntDesign, FontAwesome5} from '@expo/vector-icons';
import styles from './Home.style';
import Curative from "../Curative/Curative";

export  default function Home ({nav}){
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.box1}>
                <Image></Image>
                <Text style={styles.txt1}>Olá Usuario</Text>
                <Text style={styles.txt2}>Seja bem-vindo de volta!</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.txt3}>O que você esta precisando?</Text>
                <TextInput 
                style={styles.input1}>
                </TextInput>
                <Text style={styles.txt4}>Ou </Text> 
                <Text style={styles.txt5}> Clique no serviço abaixo:</Text>
            </View>
            <View style={styles.box3}>
                <TouchableOpacity style={styles.btn}>
                <AntDesign name="medicinebox" size={50} color="darkblue" />
                    <Text style={styles.txtBtn}>Medicamentos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5 name="book-medical" size={50} color={'#0C008C'}/>
                    <Text style={styles.txtBtn}>Avaliação</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5 name="bath" size={50} color={'#0C008C'}/>
                    <Text style={styles.txtBtn}>Higiene e cuidado</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5 name="user-nurse" size={50} color={'#0C008C'}/>
                    <Text style={styles.txtBtn}>Orientação</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}>
                     <FontAwesome5 name="bed" size={50} color={'#0C008C'}/>
                    <Text style={styles.txtBtn}>Sondagem</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Curative')}>
                    <FontAwesome5 name="band-aid" size={50} color={'#0C008C'}/>
                    <Text style={styles.txtBtn}>Curativos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5 name="hospital" size={50} color={'#0C008C'}/>
                    <Text style={styles.txtBtn}>Cuidador</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5 name="tape" size={50} color={'#0C008C'}/>
                    <Text style={styles.txtBtn}>Ostomias</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

