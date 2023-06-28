import React from "react";
import Logo from "../../../assets/pictures/crunchyroll-logo-0.png";
import Feather from "react-native-vector-icons/Feather";
import {
  Container,
  Input,
  Title,
  ButtonLogin,
  ButtonText,
  BackgroundContainer,
  LogoCrunchy,
  Termo,
  ColoredText,
  Forgot,
  Inscrever,
  InscreverText,
} from "./styles";
import { Header } from "react-native/Libraries/NewAppScreen";

const Register = () => {
  return (
    <>
      <BackgroundContainer>
        <Container>
          <Title>Criar Conta</Title>
        </Container>
        <LogoCrunchy source={Logo} resizeMode="contain" />
        <Input
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="white"
          underlineColorAndroid="gray"
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="white"
          underlineColorAndroid="gray"
        />
        <Inscrever>
          <Feather name="check-square" size={20} color="white" />
          <InscreverText>
            Inscreva-se e receba todas as informaçoes, novidades e ofertas{"\n"}
            da Crunchyroll.Cancele sua inscrção a qualquer momento.
          </InscreverText>
        </Inscrever>
        <Termo>
          Ao entrar com sua conta, você declara estar de acordo com{"\n"}
          {"      "}nossos <ColoredText>Termos de Serviço</ColoredText> &
          <ColoredText>Política de Privacidade</ColoredText>
          {"\n"}
          {"               "}e declara ter mais de 16 anos de idade.
        </Termo>
        <ButtonLogin>
          <ButtonText>CRIAR CONTA</ButtonText>
        </ButtonLogin>
        <Forgot>
          {" "}
          Já possui uma conta? <ColoredText>Login</ColoredText>{" "}
        </Forgot>
      </BackgroundContainer>
    </>
  );
};

export default Register;
