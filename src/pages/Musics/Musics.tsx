import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, GridContainer, Title } from "./styles";
import { Card } from "../../components";
import { database } from "../../database";

interface RouteParams {
  title: string;
}

interface SheetMusicsInterface {
  id: string;
  instrument: string;
  url: string;
}

export default function Musics() {
  const { title } = useParams<RouteParams>();
  const [sheetMusics, setSheetMusics] = useState<SheetMusicsInterface[]>();

  async function fetchSheetMusics() {
    const ref = database.ref(`database/musics/${title}`);
    ref.on("value", (snap) => {
      const list = snap.val();
      const listMusic = [];
      for (let id in list) {
        const obj: SheetMusicsInterface = {
          id,
          ...list[id],
        };
        listMusic.push(obj);
      }
      setSheetMusics(listMusic);
    });
  }

  useEffect(() => {
    fetchSheetMusics();
    // eslint-disable-next-line
  }, [title]);

  return (
    <Container>
      <Title>{title}</Title>
      <nav>
        <GridContainer>
          {sheetMusics?.map((item) => (
            <Card
              key={item.id}
              iconLeft="bx:bxs-file-pdf"
              title={item.instrument}
              url={item.url}
            />
          ))}
        </GridContainer>
      </nav>
    </Container>
  );
}
