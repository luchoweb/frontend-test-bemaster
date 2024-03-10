import "./style.scss";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-overlay"></div>

      <div className="container text-end">
        <h1 className="m-0 text-light">Welcome, Padawan!</h1>
        <h5 className="fw-normal m-0 text-light">Enjoy the best movies on JEDI TV</h5>
      </div>
    </section>
  )
}

export default HomeHero;
