import "./training.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import training1 from "../../images/image1.jpeg";
import training2 from "../../images/image2.jpeg";
import training3 from "../../images/image3.jpeg";
// import { AiFillCloseCircle } from "react-icons/ai";

const trainings = [
  {
    name: "The Palestinian Cultural Club in Beddawi camp",
    
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.",
    image: training1,
  },
  {
    name: "Al-Manara School for Boys affiliated with UNRWA in Nahr Al-Bared camp",
    
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.",
    image: training2,
  },
  {
    name: "Mile on the Palestinian market",
    
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.",
    image: training3,
  },
];
// fkhgb
const Training = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showEdit, setShowEdit] = useState("hide-edit");
  const [isOpen, setIsOpen] = useState(false);

  const toggleEdit = () => {
    if (isAdmin) {
      setShowEdit("show-edit");
    } else {
      setShowEdit("hide-edit");
    }
  };

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleOff = () => {
    if (isAdmin) {
      setShowEdit("show-edit");
    } else {
      setShowEdit("hide-edit");
    }
  };

  return (
    <div>
      <section className="training" >
        <h1 className="heading">
          Our Training
        </h1>
        <div className="box-container">
          {trainings.map((training, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={training.image} alt="" />
              </div>
              <div className="content">
                <span className="title">{training.name}</span>
                <span>{training.doneBy}</span>
                <p>{training.description}</p>
                <div
                  onMouseOver={toggleEdit}
                  onMouseLeave={toggleOff}
                >
                 
                  {isOpen && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <button
                          className="close-model"
                          onClick={toggleModal}
                        >
                          {/* <AiFillCloseCircle /> */}
                        </button>
                        <h1>Training desc</h1>
                        <div className="form-model">
                          <div className="model-img">
                            <img src={training.image} alt="img" />
                           
                          </div>
                          
                      </div>
                  </div>
              </div>
          )}
      </div>
  </div>
</div>
))}
</div>
</section>
</div>
);
}

export default Training;
