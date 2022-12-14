import { useState } from "react";
import Box from "./Box";
import Data from "./Data";
import "./MyWork.scss";
// import img15 from "./../../assets/Project images/1.jpg";
// import img16 from "./../../assets/Project images/1.jpg";
// import img17 from "./../../assets/Project images/1.jpg";
// import img18 from "./../../assets/Project images/1.jpg";
// import img19 from "./../../assets/Project images/1.jpg";
// import img20 from "./../../assets/Project images/1.jpg";

const MyWork = () => {
  const DataProjects = Data.map((item) => {
    return (
      <Box
        link={item.link}
        img={item.img}
        title={item.title}
        text={item.text}
        text2={item.text2}
        text3={item.text3}
        text4={item.text4}
        key={item.id}
      />
    );
  });

  const [Pro, setPro] = useState(Data);
  const filter = (catItem) => {
    const result = Pro.filter((curData) => {
      return curData.dataProject === catItem;
    });
    setPro(result);
  };

  return (
    <div className="myWork">
      <section className="gallery" id="gallery">
        <div className="headWork">
          <h2>
            <i className="fas fa-th-large d-block" aria-hidden="true"></i>
            الأعمال السابقة
          </h2>
        </div>
        <div className="container">
          <div className="gallery-work">
            <div className="workNav">
              <input
                type="radio"
                name="radio-set-1"
                id="item-type-all"
                className="item-type-all d-none"
                checked="checked"
              />
              <label for="item-type-all" className="label-type-all">
                All
              </label>
              <input
                type="radio"
                name="radio-set-1"
                id="item-type-1"
                className="item-type-1 d-none"
                onClick={() => filter("React")}
              />
              <label for="item-type-1*" className="label-type-1">
                React
              </label>
              <input
                type="radio"
                name="radio-set-1"
                id="item-type-2"
                className="item-type-2 d-none"
              />
              <label for="item-type-2*" className="label-type-2">
                JavaScript
              </label>
            </div>
            <div className="boxesProjects">{DataProjects}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWork;
