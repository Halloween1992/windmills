import { FooterWrapper } from "../wrappers.js/FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13790.093224958768!2d18.88651666135815!3d52.61161864780553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ca1ab0dd6d13f%3A0x96966d95f68a82ea!2sAliMedia!5e1!3m2!1sen!2spl!4v1732295113919!5m2!1sen!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact">
        <h1>Windmills</h1>
        <div className="address-top">
          <span>East Warszawa</span>
          <span>SRT 87-885</span>
        </div>
        <div className="address">
          <p>123, Warszawa Blvd</p>
          <p>ul. Okrzei 3/1 87-800</p>
          <p>info@windmills.pl</p>
        </div>
        <h2>Zadzwoń do nas</h2>
        <h3>123-456-798</h3>
      </div>

      <div className="contactForm">
        <h1>Kontakt</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Mollitia pariatur
        </p>
        <form action="#">
          <input type="text" name="name" id="name" placeholder="Imę" />
          <input type="tel" name="phone" id="phone" placeholder="Telefon" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <textarea name="" id="" rows="4" placeholder="Wiadomości"></textarea>
          <button type="submit">Wyślij</button>
        </form>
      </div>
      <div className="copyWrite">
        <p>2024 all rights reserved: SAYED ANWARY</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
