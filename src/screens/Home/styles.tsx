import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const CapaContainer = styled.View`
  Flex: 1;
  position: absolute;
  width: 100%;
  height: 40%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #000;

`;

export const LogoC = styled.Image`
  width: 140px;
  height: 50px;
  resizeMode: contain;
`;

export const ClassificacaoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: #333333;
  height: 45px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ClassificacaoText = styled.Text`
  color: white;
  text-align: justify;
  margin-left: 5px;
`;

export const Text2Container = styled.View`
    flex: 1;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const Text2 = styled.Text`
  color: white;
`;

export const AnimeContainer = styled.View`
  margin-top: 20px;

`;

export const AnimeCardContainer = styled.ScrollView`
  margin-bottom: 20px;
`;

export const AnimeCard = styled.View`
  margin-right: 10px;
`;

export const AnimeCard2 = styled.View`
  margin-right: 10px;
`;

export const AnimePicture = styled.Image`
  width: 150px;
  height: 200px;
`;

export const AnimePicture2 = styled.Image`
width: 400px;
height: 250px;
`;

export const Description = styled.Text`
  color: white;
  background-color: #354040;
`;
