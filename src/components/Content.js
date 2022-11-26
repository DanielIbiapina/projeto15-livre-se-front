import styled from "styled-components";
import BookCards from "./BookCards";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Content() {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    
    const promise = axios.get(
      "https://livre-se-api.onrender.com/books"
      
    );

    promise.then((res) => {
      setGenresList(res.data);
      console.log(res.data)
      
    });

    promise.catch((err) => console.log(err.responde.data));
  }, []);

  console.log(genresList)

  return (
    <>
      
      <ContentContainer>
      {genresList.map((g) => (
        <Session>
          <SessionName>{g.genre}</SessionName>
          <BookCards books={g.books}/>
        </Session>))}
        
      </ContentContainer>
    </>
  );
}
const ContentContainer = styled.div`
  width: 100%;
  margin-top: 120px;
`;
const Session = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 350px;
  margin-top: 20px;
`;
const SessionName = styled.div`
  font-size: 20px;
  margin-left: 8px;
  margin-bottom: 17px;
`;
