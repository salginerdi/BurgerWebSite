import BannerImage from "../assets/banneryeni.jpg";
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minima
          unde pariatur itaque placeat numquam vitae nobis modi voluptatum dicta
          vel natus dignissimos eum dolorem, repellendus, aliquam nisi eaque.
          Ratione ex id rem dicta quasi reprehenderit suscipit culpa iure odio
          voluptates, deserunt voluptate quis consequatur explicabo. Placeat
          eaque eos laboriosam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In harum delectus quibusdam numquam officia.
          Mollitia, voluptatibus consequatur. Consequuntur aperiam, consequatur
          dolor tempora incidunt laborum, nobis veniam laboriosam quasi numquam
          esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          eum hic repudiandae magnam aspernatur eligendi beatae deleniti et vel
          veniam sapiente sit provident tenetur numquam eveniet nobis
          accusantium, suscipit temporibus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore, nostrum obcaecati, reiciendis
          voluptas voluptatibus aut, veritatis sed eveniet eos quaerat laborum
          at facere architecto dolores rem harum hic autem optio.
        </p>
      </div>
    </div>
  );
}

export default About;
