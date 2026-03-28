import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="about">
        <h3>About</h3>
        <p>Isaac, .........</p>
      </div>

      <hr />

      <div className="copyright">
        <p>
          ©2026 Design by <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer"> Amaka </a> & <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer"> Ifeoma A.</a>
          <br className="first_br" />
          Built by <a href="https://github.com/Callmiremzy/Ts-Academy-React-project?tab=readme-ov-file#readme" target="_blank" rel="noopener noreferrer">React Nexus.</a>
          <br className="second_br" />
          All rights reserved
        </p>
        <a href="https://tsacademyonline.com">
          <p className="tsa">TSAcademy</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;