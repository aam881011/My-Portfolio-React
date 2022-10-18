import "./ContactUs.scss";
// import CustomerReviews from "../CustomerReviews/CustomerReviews";

const ContactUs = () => {
  return (
    <section class="contacts" id="contacts">
      <div class="overlay">
        <div class="container">
          {/*<CustomerReviews />*/}
          <div class="contact-info" id="contact-info">
            <div class="contact-title text-center">
              <h3>تواصل معي</h3>
            </div>
            <div class="row">
              <div class="col-md-8">
                <form class="contact-form row" id="contactForm">
                  <div class="col-sm-6">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="الاسم"
                      required
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="البريد الإلكتروني"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="نص الرسالة أو تفاصيل المشروع"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn">
                    إرسال
                  </button>
                </form>
              </div>
              <div class="col-md-4">
                <ul class="contact-us list-unstyled">
                  <li>
                    <i class="fas fa-phone"></i>
                    01210250215
                  </li>
                  <li>
                    <i class="far fa-envelope"></i>
                    aam881011@gmail.com
                  </li>
                  <li>
                    <i class="fa-solid fa-location-dot"></i>
                    العنوان :مصر / المنيا / ملوي
                  </li>
                </ul>
                <hr />
                <ul class="social list-inline">
                  <li class="list-inline-item">
                    <a href="/#">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="https://www.facebook.com/profile.php?id=100013633185442"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="copyright">
            <p>جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
