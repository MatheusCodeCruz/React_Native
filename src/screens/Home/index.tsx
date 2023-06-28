import React from "react";
import { ScrollView, ImageBackground } from "react-native";
import {
  Container,
  CapaContainer,
  ClassificacaoContainer,
  ClassificacaoText,
  AnimeContainer,
  AnimeCardContainer,
  AnimeCard,
  AnimeCard2,
  AnimePicture2,
  Description,
  AnimePicture,
  Header,
  LogoC,
  Text2Container,
  Text2,
} from "./styles";
import Logo from "../../../assets/pictures/crunchyroll-logo-0.png";
import Bleach from "../../../assets/pictures/bleach.png";
import Darling from "../../../assets/pictures/darling.png";
import Fma from "../../../assets/pictures/fma_brother.png";
import Juju from "../../../assets/pictures/Jujutsu_Kaisen_Cover.png";
import Kimetsu from "../../../assets/pictures/kimetsu.png";
import Snk from "../../../assets/pictures/SnK_Volume1.png";
import Back from "../../../assets/pictures/jujutsu-back.png";

import  Feather  from "react-native-vector-icons/Feather";

const Home = () => {
  return (
    <Container>
      <Header style={{zIndex: 1}}>
        <LogoC source={Logo} />
        <Feather name="search" size={20} color="white" />
      </Header>
      <CapaContainer>
        <ImageBackground
          source={Back}
          resizeMode="cover"
          style={{ flex: 1, width: "100%", height: "120%" }}
        />
      </CapaContainer>
      <ScrollView style={{ zIndex: 1 }}>
        <Text2Container style={{ marginTop: "60%"}}>
          <Text2>
            JUJUTSU KAISEN!{"\n"}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            voluptatem numquam. Consequuntur aspernatur dolores alias placeat
            saepe nobis obcaecati in repudiandae suscipit ipsam? Dolor
            cupiditate non quasi neque adipisci. Ab.
          </Text2>
        </Text2Container>
        <ClassificacaoContainer>
          <Feather name="alert-circle" size={18} color="white" />
          <ClassificacaoText>
            Verifique a Classificação Indicativa !
          </ClassificacaoText>
        </ClassificacaoContainer>
        <Text2Container>
          <Text2>
            RECOMENDAÇOES PARA VOCÊ !
          </Text2>
        </Text2Container>
        <AnimeContainer>
          <AnimeCardContainer horizontal>
            <AnimeCard>
              <AnimePicture source={Bleach} />
              <Description>Descrição do Anime 1 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Darling} />
              <Description>Descrição do Anime 2 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Fma} />
              <Description>Descrição do Anime 3 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Juju} />
              <Description>Descrição do Anime 4 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Kimetsu} />
              <Description>Descrição do Anime 5 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 6 {"\n\n"}Series</Description>
            </AnimeCard>
          </AnimeCardContainer>
          <Text2Container>
          <Text2>
            CONTINUAR ASSISTINDO !
          </Text2>
        </Text2Container>
          <AnimeCardContainer horizontal>
            <AnimeCard2>
              <AnimePicture2 source={Snk} />
            </AnimeCard2>
            <AnimeCard2>
              <AnimePicture2 source={Snk} />
            </AnimeCard2>
            <AnimeCard2>
              <AnimePicture2 source={Snk} />
            </AnimeCard2>
            <AnimeCard2>
              <AnimePicture2 source={Snk} />
            </AnimeCard2>
            <AnimeCard2>
              <AnimePicture2 source={Snk} />
            </AnimeCard2>
            <AnimeCard2>
              <AnimePicture2 source={Snk} />
            </AnimeCard2>
          </AnimeCardContainer>
          <Text2Container>
          <Text2>
            DA SUA LISTA!
          </Text2>
        </Text2Container>

          <AnimeCardContainer horizontal>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 4 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 5 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 6 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 4 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 5 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 6 {"\n\n"}Series</Description>
            </AnimeCard>
          </AnimeCardContainer>

          <AnimeCardContainer horizontal>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 4 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 5 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 6 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 4 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 5 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 6 {"\n\n"}Series</Description>
            </AnimeCard>
          </AnimeCardContainer>

          <AnimeCardContainer horizontal>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 4 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 5 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 6 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 4 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 5 {"\n\n"}Series</Description>
            </AnimeCard>
            <AnimeCard>
              <AnimePicture source={Snk} />
              <Description>Descrição do Anime 6 {"\n\n"}Series</Description>
            </AnimeCard>
          </AnimeCardContainer>
        </AnimeContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
