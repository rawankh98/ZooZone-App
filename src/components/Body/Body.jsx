import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../Card/MyCard";
import NavBar from "../Nav/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import MyModal from "../MyModal/MyModal";
import "./Body.css";
import MyDropDown from "../MyDropDown";
import AddAnimalModal from "../AddAnimal/AddAnimalModal"
const REACT_APP_URL = process.env.REACT_APP_URL;

export default function Body() {
  const [animalData, setAnimalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [searchName, setSearchName] = useState("");
  const [showAddModal, setShowAddModal] = useState(false); 



  useEffect(()=>{
    console.log(REACT_APP_URL);
    axios.get(`${REACT_APP_URL}`).then((res) => {
      setAnimalData(res.data.rows);
  })},[])


  const openCard = (modalData) => {
    setModalData(modalData);
    setShowModal(true);
  };

  const sortName = (typeSort) => {
    if (typeSort === "asc") {
      setAnimalData(
        [...animalData].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else {
      setAnimalData(
        [...animalData].sort((a, b) => b.name.localeCompare(a.name))
      );
    }
  };

  const handleSearch = () => {
    axios
      .get(`${REACT_APP_URL}/?search=${searchName}`)
      .then((res) => {
        setAnimalData(res.data);
      });
  };

  return (
    <div>
      <NavBar />
      <Container
        className="contain"
        style={{
          marginTop: "20px",
          padding: "20px",
          height: "550px",
          overflowY: "auto",
          borderRadius: "23px",
        }}
      >
        <div
          className="bodyNav"
          style={{marginBottom: "30px" }}
        >
          <section >
          <section className="search">
            <input
              type="text"
              name="searchName"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <button
              style={{ border: "white", backgroundColor: "white", fontSize:"15px", fontWeight:"10px" }}
              onClick={handleSearch}
            >
              {" "}
              <CiSearch /> Search
            </button>
          </section>
          </section>
          <section style={{display:"flex", flexDirection:"row", gap:"10px"}}>
          <MyDropDown sortFunction={sortName} />
          
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            Add Animal
          </Button>
         
          </section>
          
        </div>
        <hr></hr>
        {!showModal ? (
          <Row>
            {animalData &&
              animalData.map((ele) => {
                if (!ele.id) {
                  console.error("Animal data missing id", ele);
                  return null;
                }
                return (
                  <Col key={ele.id}>
                    <div onClick={() => openCard(ele)}>
                      <MyCard cardData={ele}/>
                    </div>
                  </Col>
                );
              })}
          </Row>
        ) : (
          <MyModal
            showModal={showModal}
            setShowModal={setShowModal}
            modalData={modalData}
            animalData={animalData}
            setAnimalData={setAnimalData}
          />
        )}

        <AddAnimalModal animalData={animalData} setAnimalData={setAnimalData} showModal={showAddModal} setShowModal={setShowAddModal} />
      </Container>
    </div>
  );
}
