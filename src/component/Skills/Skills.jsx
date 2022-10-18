import "./Skills.scss";

const Skills = () => {
  return (
      <section className="statistics" id="statistics">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <div className="stat text-center">
                  <div className="circle" data-value="0.90">
                    <span></span>
                  </div>
                  <p>HTML</p>
                </div>
              </div>
              <div className="col-sm-4 col-md-2">
                <div className="stat text-center">
                  <div className="circle" data-value="0.75">
                    <span></span>
                  </div>
                  <p>CSS</p>
                </div>
              </div>
              <div className="col-sm-4 col-md-2">
                <div className="stat text-center">
                  <div className="circle" data-value="0.7">
                    <span></span>
                  </div>
                  <p>Bootstrap</p>
                </div>
              </div>
              <div className="col-sm-4 col-md-2">
                <div className="stat text-center">
                  <div className="circle" data-value="0.6">
                    <span></span>
                  </div>
                  <p>Sass</p>
                </div>
              </div>
              <div className="col-sm-4 col-md-2">
                <div className="stat text-center">
                  <div className="circle" data-value="0.5">
                    <span></span>
                  </div>
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="col-sm-4 col-md-2">
                <div className="stat text-center">
                  <div className="circle" data-value="0.6">
                    <span></span>
                  </div>
                  <p>React.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;
