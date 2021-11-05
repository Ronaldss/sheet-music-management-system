import { useState, useEffect } from "react";

import { Container, GridContainer, ImgPainel, Title } from "./styles";
import Painel from "../../assets/img/panel.jpeg";
import { database } from "../../database";

import { Card } from "../../components";

type MusicsType = {
  id: string;
  title: string;
};

export default function Home() {
  const [musics, setMusics] = useState<MusicsType[]>();

  async function fetchBlogs() {
    const ref = database.ref("database/list_music");
    ref.on("value", (snap) => {
      const list = snap.val();
      const listMusic = [];
      for (let id in list) {
        const obj: MusicsType = {
          id,
          ...list[id],
        };
        listMusic.push(obj);
      }
      setMusics(listMusic);
    });
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container>
      <ImgPainel src={Painel} alt="img painel" />
      <Title>Músicas</Title>
      <GridContainer>
        {musics?.map((item) => (
          <Card key={item.id} iconLeft="bx:bxs-file-pdf" title={item.title} />
        ))}
      </GridContainer>
    </Container>
  );
}
