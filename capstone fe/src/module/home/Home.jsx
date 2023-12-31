import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllImg } from "../../api/imageApi";
import { Container } from "react-bootstrap";
import "./home.css";
const Home = () => {
  const { data, isPending } = useQuery({
    queryKey: ["get-all"],
    queryFn: getAllImg,
  });
  console.log(data);
  if (!isPending) {
    return (
      <div id="home">
        <Container>
          <div id="home-content">
            {data.data.content.map((item, index) => {
              return (
                <div key={index} className="home-content-item">
                  <img src={item.duong_dan} alt="" />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
};

export default Home;
