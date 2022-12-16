import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box1:{
        backgroundColor:'#65D6AD',
        width:390,
        height:107,
        alignItems:'center',
        borderBottomRightRadius:40,
    },
    box2:{
        width:390,
        height:130,
        backgroundColor:'#C6F7E2',
        alignItems:'center',
        borderBottomRightRadius:40,

    },
    box3:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems:'center',
        textAlign:'center',

    },
    box4:{
        display:'flex',
        flexDirection:'column-reverse'
    },
    txt1:{
        fontSize:23,
        marginTop:10,
        color: '#0C008C',
        
    },
    txt2:{
        fontSize: 19,
        lineHeight: 23,
        color:'#0C008C',
        marginLeft:120,
        marginTop:100,
    },
    
})