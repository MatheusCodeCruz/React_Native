import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #333333;
    width: 92%;
    height: 20%;
    justifyContent: center;  
`;

 export const BackgroundContainer = styled.View`
    background-color: black;
    width: 100%;
    height: 100%;
    alignItems: center;
`;

export const Input = styled.TextInput`
     width: 98%;
     padding: 14px;
     font-size: 15px;
     color: white;
     margin-bottom: 10px;
     background-color: #333333;
     
`;

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    margin-top: 30px;
`; 

export const ButtonLogin = styled.TouchableOpacity`
    border: 1px solid gray;
    width: 92%;
    height: 4%;
    justifyContent: center;
    margin-top: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: gray;
`;

export const LogoCrunchy = styled.Image`
    width: 50%;
    height: 30%;
    margin-top: 10px;
`;

export const Termo = styled.Text`
    color: white;
    font-size: 11px;
    margin-top: 10px;
    padding: 5px;
`;

export const ColoredText = styled.Text`
    color: #FF7F00;
`;

export const Forgot = styled.Text`
    color:#FF7F00;
    margin-top: 25px;
`;



