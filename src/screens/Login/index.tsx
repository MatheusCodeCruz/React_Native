import React from "react";
import Logo from "../../../assets/pictures/crunchyroll-logo-0.png";
import {
  Input,
  Title,
  ButtonLogin,
  ButtonText,
  BackgroundContainer,
  LogoCrunchy,
  Termo,
  ColoredText,
  Forgot,
} from "./styles";

const Login = () => {
  return (
    <>
      <BackgroundContainer>
        <Title>LOGIN</Title>
        <LogoCrunchy source={Logo} resizeMode="contain" />
          <Input
            keyboardType="email-address"
            placeholder="Email ou Nome de Usuario"
            placeholderTextColor="white"
            underlineColorAndroid="#FF7F00"
          />
          <Input
            placeholder="Senha"
            placeholderTextColor="white"
            underlineColorAndroid="#FF7F00"
          />
        <Termo>
          Ao entrar com sua conta, você declara estar de acordo com{"\n"}
          {"      "}nossos <ColoredText>Termos de Serviço</ColoredText> & 
          <ColoredText>Política de Privacidade</ColoredText>{"\n"}
          {"               "}e declara ter mais de 16 anos de idade.
         </Termo>
        <ButtonLogin>
          <ButtonText>LOGIN</ButtonText>
        </ButtonLogin>
        <Forgot> Esqueceu a senha ? | Criar conta </Forgot>
      </BackgroundContainer>
    </>
  );
};

export default Login;
