import Navbar from "../components/Navbar"
import imgContact from "/img-footer3.png"
const Contact = () => {
  return (
    <>
    <Navbar></Navbar>
    <h4 className="bg-[#212121] font-releway w-full text-center text-3xl font-semibold pt-10 pb-6 text-[#717171] lg:text-4xl lg:text-start lg:pl-20">Let's talk</h4>
    <section id="box-black-contact" className="w-full flex flex-col bg-[#212121] justify-center items-center lg:w-3/5">
      <div className="form-container px-1 lg:flex lg:justify-start lg:h-4/5 lg:-mt-14">
        <form className="form">
          <div className="form-group">
            <label for="text">Nombre</label>
            <input required="" name="text" type="text" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input required="" name="text" type="text" />
          </div>
          <div className="form-group">
            <label for="textarea">Mensaje</label>
            <textarea
              required=""
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
            >
              {" "}
            </textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>

      <article className="bg-gray-200 object-contain w-full flex flex-col-reverse items-center justify-center pt-6 lg:flex-col lg:w-2/5 lg:absolute lg:h-screen lg:top-0 lg:bottom-0 lg:right-0 lg:items-start">
          <figure className="-ml-28 -mt-12 max-w-lg lg:self-center">
            <img src={imgContact} alt="" />
          </figure>
          <ul className="self-center text-3xl pb-4 text-center text-[#ca9c46] flex gap-6 lg:pb-4 lg:text-4xl lg:gap-10">
            <li><i className='bx bx-phone'></i></li>
            <li><i className='bx bxl-gmail'></i></li>
            <li><i className='bx bxl-instagram'></i></li>
            <li><i className='bx bxl-facebook-square'></i></li>
          </ul>
      </article>
      </section>
    </>
  );
};

export default Contact;
