import './Courses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export const Courses = () => {
  return (
    <>
      <div style={{margin:"5rem"}}>
        <section>
          <div class="row">
            <h1 class="section-heading">Our Services</h1>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h3>Online Hospital Service</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-brush"></i>
                </div>
                <h3>AI Based Medical Counsiling</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-wrench"></i>
                </div>
                <h3>Online Appoinment Booking</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-truck-pickup"></i>
                </div>
                <h3>Free Medicines Service</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-broom"></i>
                </div>
                <h3>Experineced Doctor Team</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-plug"></i>
                </div>
                <h3>Service Heading</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
