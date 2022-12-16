import { useNavigation} from "@react-navigation/native";
import React,{useState}  from "react";
import {  Text, View, TouchableOpacity,TextInput } from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase/Firebase"; 
import { AntDesign} from '@expo/vector-icons';
import styles from './Register.style';



export default function Register ({nav}) {
    const navigation = useNavigation();   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfirmPassword] = useState("");

    function checkPassword(){
      if(password.length < 6){
        alert("A senha precisa ter no mínimo 6 digitos!");
      }else{
        if(password === confPassword){
          createUser();
        }else{
          alert("As senhas nao coincidem!");
        }
      }
      
    }
    
    
    async function createUser(){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        {
        alert('Cadastrado efetuado com sucesso!!');
        navigation.navigate('Login');
        }
      
      }).catch(error => alert(error));
    };
    
    return(
    <View style={styles.container}>
        <View style={styles.boxFoto}>
            <Text style={styles.titulo} >Insira seus dados e foto de identificação</Text>
            <AntDesign name="user" size={50} color="darkblue" />
        </View>
      
      <TextInput
        style={styles.input1}
        placeholder="Nome"/>
      <TextInput
        style={styles.input1}
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}/>
      <TextInput
        style={styles.input1}
        placeholder="Senha(6 digitos)"
        value={password}
        onChangeText={value => setPassword(value)}
        maxLength={20}
        secureTextEntry={true}/>
      <TextInput
        style={styles.input1}
        placeholder="Repita a Senha"
        value={confPassword}
        maxLength={20}
        secureTextEntry={true}
        onChangeText={value => setConfirmPassword(value)}/>  
      
      <View style={styles.boxFlex} >
        <TextInput style={styles.input2} placeholder="DN"/>
        <TextInput style={styles.input2} placeholder="Sexo"/>
      </View>
        
        <View style={styles.boxFlex}>  
            <TouchableOpacity onPress={() => checkPassword()} style={styles.btn}><Text style={styles.txtBtn}>Cadastrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtBtn} onPress={() => navigation.navigate('Login')}>Voltar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtBtn} onPress={() => navigation.navigate('Register2')} >Proximo</Text></TouchableOpacity>
        </View>
    </View>
    );
}



