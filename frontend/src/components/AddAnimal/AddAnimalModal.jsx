import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import "./AddAnimalModal.css"

const REACT_APP_URL = process.env.REACT_APP_URL;

const AddAnimalModal = ({ showModal, setShowModal, animalData, setAnimalData }) => {
const [formData, setFormData] = useState({ });



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };



  const handleAddAnimal = (formData) => {
    try {
      axios
        .post(`${REACT_APP_URL}/add`, formData)
        .then((res) => {
          axios
          .get(`${REACT_APP_URL}`)
          .then((response) => {
            setAnimalData(response.data.rows);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddAnimal(formData);
    setShowModal(false)

  };


  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Animal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="formControl">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>


          <Form.Group controlId="formDescription" className="formControl">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} required />
          </Form.Group>
          
          
          <Form.Group controlId="formFamily" className="formControl">
            <Form.Label>Family</Form.Label>
            <Form.Control type="text" name="family" value={formData.family} onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group controlId="formPlaceOfFound" className="formControl">
            <Form.Label>Place_of_found</Form.Label>
            <Form.Control type="text" name="place_of_found" value={formData.place_of_found} onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group controlId="formSpecies" className="formControl">
            <Form.Label>Species</Form.Label>
            <Form.Control type="text" name="specie" value={formData.specie} onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group controlId="formHabits" className="formControl">
            <Form.Label>Habits</Form.Label>
            <Form.Control type="text" name="habits" value={formData.habits} onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group controlId="formDiet" className="formControl">
            <Form.Label>Diet</Form.Label>
            <Form.Control type="text" name="diet" value={formData.diet} onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group controlId="formWeight" className="formControl">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" name="weight" value={formData.weight} onChange={handleChange} required />
          </Form.Group>
          
          
          <Form.Group controlId="formHeight" className="formControl">
            <Form.Label>Height</Form.Label>
            <Form.Control type="number" name="height" value={formData.height} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formImage" className="formControl">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" name="image" value={formData.image} onChange={handleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Animal
          </Button>
        </Form>
      </Modal.Body>
    </Modal>

  );
};

export default AddAnimalModal;
