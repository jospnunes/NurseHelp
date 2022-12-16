import { useNavigation } from "@react-navigation/native";
import React  from "react";
import {  Text, View, TouchableOpacity,TextInput } from "react-native";
import { AntDesign} from '@expo/vector-icons';
import styles from './Register2.style';
export default function Register2({nav}){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <View style={styles.boxFoto}>
            <Text style={styles.titulo} >Dados Residenciais</Text>
            <AntDesign name="home" size={50} color="darkblue" />
        </View>
      
      <TextInput
        style={styles.input1}
        placeholder="Endereço"/>
      <TextInput
        style={styles.input1}
        placeholder="Bairro"/>
      <TextInput
        style={styles.input1}
        placeholder="CEP"/>
      <TextInput
        style={styles.input1}
        placeholder="Estado"/>  
      <TextInput
        style={styles.input1}
        placeholder="Telefone"/> 

      
        
        <View style={styles.boxFlex}>  
            <TouchableOpacity style={styles.btn}><Text style={styles.txtBtn} onPress={() => navigation.navigate('Register')}>Voltar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtBtn} onPress={() => navigation.navigate('Home')}>Proximo</Text></TouchableOpacity>
        </View>
    </View>
    );
}

