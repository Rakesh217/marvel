import React, { useState, useEffect } from "react";
import Alpha from "./Alpha";
import Index from "./Index";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [Name, setName] = useState("");
  const [Data, setData] = useState([]);
  let fetchCall = () => {
    let myHeader = new Headers();

    let api =
      "http://comicvine.com/api/issues?api_key=9d7ede77dc1b6568df49c5b9930fb7e5848a8d59";
    // let api = new URL("http://gateway.marvel.com/v1/public/characters");
    // api.search = new URLSearchParams({
    //   apikey: "a8390df44f7772bb5250575b681ac7ab",
    //   ts: "Rakesh",
    //   hash: "1df7bf3fd2183ed0342d1e195f80c02b",
    // });
    myHeader.append("Content-Type", "application/json");
    fetch(api, {
      method: "GET",
      headers: myHeader,
    })
      .then((result) => result.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };
  console.log("fetchCall", Data);

  useEffect(() => {
    fetchCall();
    console.log("useEffect", Data);
  }, []);
  return (
    <div>
      <Index receiveCharName={(value) => setName(value)} charData={Data} />
      {
        //<Container className="compCont">
        //     <Row>
        //       <Col style={{ background: "42f5e9", margin: "0" }}>
        //         <Alpha />
        //       </Col>
        //       <Col lg={10}></Col>
        //     </Row>
        //   </Container>
      }
    </div>
  );
}
