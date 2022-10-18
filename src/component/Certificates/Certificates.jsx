import "./Certificates.scss";

const Certificates = () => {
  return (
    <section className="licence" id="licence">
      <div className="container">
        <div className="licence-title text-center">
          <h2>
            <i className="fas fa-graduation-cap"></i>
            الشهادات
          </h2>
        </div>
        <ul className="timeline">
          <li>
            <div className="timebox">
              <h4>
                {" "}
                <span>مارس 2021</span> كورس برمجة المواقع
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugiat, deserunt, ab laudantium vel nostrum sit dignissimos
                natus commodi sapiente, veniam porro esse vero illo
                exercitationem voluptas consequuntur est reprehenderit.
              </p>
            </div>
          </li>
          <li>
            <div className="timebox">
              <h4>
                {" "}
                <span>مارس 2022</span> دوره في اكاديمية حسوب
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugiat, deserunt, ab laudantium vel nostrum sit dignissimos
                natus commodi sapiente, veniam porro esse vero illo
                exercitationem voluptas consequuntur est reprehenderit.
              </p>
            </div>
          </li>
          <li>
            <div className="timebox">
              <h4>
                <span>مارس 2019</span> تعلم اساسيات البرمجه
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugiat, deserunt, ab laudantium vel nostrum sit dignissimos
                natus commodi sapiente, veniam porro esse vero illo
                exercitationem voluptas consequuntur est reprehenderit.
              </p>
            </div>
          </li>
          <li>
            <div className="timebox">
              <h4>
                <span>مارس 2020</span>تطوير واجة المستخدم
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugiat, deserunt, ab laudantium vel nostrum sit dignissimos
                natus commodi sapiente, veniam porro esse vero illo
                exercitationem voluptas consequuntur est reprehenderit.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
