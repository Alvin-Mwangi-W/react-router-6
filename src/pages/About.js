import { Link } from "react-router-dom";

const About = () => {
  console.log("hello dimwit")
  return (
    <section className='section'>
      <h2>About</h2>

      <Link to='/' className="btn">Back Home</Link>
    </section>
  );
};
export default About;
