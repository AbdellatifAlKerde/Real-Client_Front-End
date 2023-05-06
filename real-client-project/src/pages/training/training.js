import "./training.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Training = () => {
  const [data, setData] = useState([]);

  const getTrainings = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/training`
      );
      setData(response.data.items);
      console.log(response.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTrainings();
  }, []);

  return (
    <>
      <section className="training">
        <div className="main-hero-section">
          <h2>Trainings</h2>
        </div>
        <div className="training-cards">
          {data.map((training) => {
            return (
              <div className="training-card">
                <div className="training-card-img">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${training.image}`}
                    alt="training card image"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="training-card-desc">
                  <h2>{training.title}</h2>
                  <p>{training.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Training;
