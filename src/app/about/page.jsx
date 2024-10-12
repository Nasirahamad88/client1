// pages/About.jsx
import Faq from '@/Component/Faq';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="content"
      className="site-content "
      style={{
        backgroundColor: "hsla(240,100%,4%,1)",
        backgroundImage: `
          radial-gradient(at 51% 27%, hsla(240,96%,15%,1) 0px, transparent 50%),
          radial-gradient(at 50% 66%, hsla(240,96%,15%,1) 0px, transparent 50%);
        `,
      }}
    >
      <section className="section-intro py-20 ">
        <div className="container mx-auto">
          <h1 className="page-title mb-5 mt-5 text-center text-4xl font-bold">About</h1>
        </div>
      </section>

      <section className="section-mission-vision">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-5/12 mt-4 text-center lg:text-left">
              <Image
                src="/logo/3.png"
                alt="Yana Abazher"
                width={411}
                height={461}
                className="mx-auto rounded-full"
              />
            </div>
            <div className="lg:w-7/12 mt-4 lg:mt-0">
              <div className="flex flex-col md:flex-row w-[90%] mx-auto">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <div className="text-item">
                    <h2 className="text-item__title text-xl font-semibold">Mission</h2>
                    <div className="text-item__content">Make content creation easy, to grow on socials</div>
                  </div>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <div className="text-item">
                    <h2 className="text-item__title text-xl font-semibold">Vision</h2>
                    <p className="text-item__content">Enable everyone to be a creator</p>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="text-item">
                    <h2 className="text-item__title text-xl font-semibold">Values</h2>
                    <p className="text-item__content">We’re driven by SPICE (the acronym of our core values):</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-4 w-[85%] mx-auto">
                <ul className="values-list">
                  <li className="mb-4">
                    <h3 className="value-title font-semibold">Simplicity -</h3>
                    <p className="value-content">Making complex, simple to use, by everyone</p>
                  </li>
                  <li className="mb-4">
                    <h3 className="value-title font-semibold">Passion -</h3>
                    <p className="value-content">For enabling others to express themselves easily</p>
                  </li>
                  <li className="mb-4">
                    <h3 className="value-title font-semibold">Innovation -</h3>
                    <p className="value-content">Our engine that unlocks future possibilities</p>
                  </li>
                  <li className="mb-4">
                    <h3 className="value-title font-semibold">Creativity -</h3>
                    <p className="value-content">The ongoing force that manifests itself in everything we do</p>
                  </li>
                  <li className="mb-4">
                    <h3 className="value-title font-semibold">Excellence -</h3>
                    <p className="value-content">In our work for humans, as we are doing it for God</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-about pb-20">
        <div className="container mx-auto">
          <div className="text-media text-center lg:text-left">
            <h2 className="person-name text-3xl font-bold">Yana Abazher</h2>
            <h3 className="person-position text-xl">Founder &amp; CEO Templify app</h3>
            <div className="text-media__text-wrap mt-4">
              <p className="mb-4">
                I’m a creative person in love with teamwork, tech, video production, and using creative strategies for business growth. I love using my talents to help businesses thrive creatively, which is why I founded Templify App.
              </p>
              <p>
                More info about me – <a className="text-blue-500 underline" href="https://linktr.ee/yanaabazher">here</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
};

export default About;
