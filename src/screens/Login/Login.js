import { useNavigation } from '@react-navigation/native';
import  React,{useState} from 'react';
import { Text, Image, View, TouchableOpacity,TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/Firebase";
import styles from './Login.style';

 
export default function Login({nav}) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signInUser(){
        await signInWithEmailAndPassword(auth, email, password)
        .then(() =>{
            {
                alert("Bem vindo!!")
                navigation.navigate('Home');
            }
        }).catch(error => alert(error));
    }




        return(
            <View style={styles.container}>
                <Image style={styles.logoNurse} source={require('../../assets/images/logo-nurse.png')}/>
                <TextInput 
                    style={styles.inputEmail}
                    placeholder="Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                <TextInput
                    style={styles.inputSenha}
                    placeholder="Senha"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    maxLength={20}
                    secureTextEntry={true}
                />
                
                <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
                <TouchableOpacity onPress={() => signInUser()}
                    style={styles.btnEntrar}>
                        <Text 
                            style={styles.txtEntrar}>ENTRAR
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnCadastrar} onPress={() => navigation.navigate('Register')}>
                        <Text 
                            style={styles.txtCadastrar}>Quero me cadastrar
                        </Text>
                </TouchableOpacity>
                <Text style={styles.seVoce}>É um profissional? </Text>
                
                <TouchableOpacity 
                    style={styles.btnCliqueaqui}>
                        <Text 
                            style={styles.txtCliqueAqui}>Clique Aqui
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }



