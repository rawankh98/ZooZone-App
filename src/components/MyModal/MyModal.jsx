import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MyModal.css";
const REACT_APP_URL = process.env.REACT_APP_URL;

function MyModal({
  modalData,
  showModal,
  setShowModal,
  animalData,
  setAnimalData,
}) {
  const [name, setName] = useState(modalData.name);
  const [des, setDes] = useState(modalData.description);
  const [family, setFamily] = useState(modalData.family);
  const [place, setPlace] = useState(modalData.place_of_found);
  const [spec, setSpec] = useState(modalData.specie);
  const [habit, setHabit] = useState(modalData.habits);
  const [diet, setDiet] = useState(modalData.diet);
  const [weight, SetWeight] = useState(modalData.weight);
  const [height, setHeight] = useState(modalData.height);
  const [image, setImage] = useState(modalData.image);

  const [forUpdate, setForUpdate] = useState(false);

  const onUpdate = (e) => {
    setForUpdate(true);
  };


  useEffect(() => {
  }, [animalData]);

  const onDelete = () => {
    const myId = animalData.filter((data) => data.id == modalData.id);
    const id = myId.map((dat) => {
      return dat.id;
    });
    axios
      .delete(`${REACT_APP_URL}/delete/${id}`)
      .then((res) => {
        setShowModal(false);
        axios
          .get(`${REACT_APP_URL}`)
          .then((response) => {
            setAnimalData(response.data.rows);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
  }, [showModal]);

  const handleSaveChanges = () => {
    const dataForUpdate = {
      name: name,
      description: des,
      family: family,
      place_of_found: place,
      specie: spec,
      habits: habit,
      diet: diet,
      weight: weight,
      height: height,
      image: image,
    };

    axios
      .put(
        `${REACT_APP_URL}/${modalData.id}`,
        dataForUpdate
      )
      .then((res) => {
      })
      .catch((err) => {
        console.error(err);
      });
    modalData.name = name;
    modalData.description = des;
    modalData.diet = diet;
    modalData.family = family;
    modalData.weight = weight;
    modalData.height = height;
    modalData.habits = habit;
    modalData.specie = spec;
    modalData.image = image;
    modalData.place_of_found = place;

    setForUpdate(false);
    setShowModal(false);
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Body>
          {forUpdate ? (
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <label>Change Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          ) : (
            <Modal.Title>{modalData.name}</Modal.Title>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "6px",
              justifyContent: "right",
            }}
          >
            {!forUpdate && (
              <Button variant="primary" onClick={onUpdate}>
                Update
              </Button>
            )}
            {!forUpdate && (
              <Button variant="primary" onClick={onDelete}>
                Delete
              </Button>
            )}
          </div>
          <hr></hr>

          {forUpdate ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                {" "}
                <label> Change Weight</label>
                <input
                  type="number"
                  name="weight"
                  value={weight}
                  onChange={(e) => SetWeight(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Height</label>
                <input
                  type="number"
                  name="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Diet</label>
                <input
                  type="text"
                  name="diet"
                  value={diet}
                  onChange={(e) => setDiet(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Habits</label>
                <input
                  type="text"
                  name="habit"
                  value={habit}
                  onChange={(e) => setHabit(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Description</label>
                <input
                  type="text"
                  name="des"
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Family</label>
                <input
                  type="text"
                  name="family"
                  value={family}
                  onChange={(e) => setFamily(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Species</label>
                <input
                  type="text"
                  name="spec"
                  value={spec}
                  onChange={(e) => setSpec(e.target.value)}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Place</label>
                <input
                  type="text"
                  name="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>Change Image</label>
                <input
                  type="text"
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <img
                style={{ width: "50%" }}
                src={modalData.image}
                alt="animal"
              />
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <div>
                  <p>Habits</p>
                  <p>Family</p>
                  <p>Species</p>
                  <p>Place Of Found </p>
                  <p>Diet</p>
                  <p>Weight</p>
                  <p>height</p>
                </div>
                <div>
                  <p> {modalData.habits}</p>
                  <p> {modalData.family}</p>
                  <p> {modalData.specie}</p>
                  <p>{modalData.place_of_found}</p>
                  <p> {modalData.diet}</p>
                  <p> {modalData.weight}</p>
                  <p> {modalData.height}</p>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
