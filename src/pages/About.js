import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <div className="aboutUs">
        <h1>🌱 Welcome to Bari Ko Tarkari</h1>

        <p>
          Fresh, homegrown vegetables—delivered straight from our fields to your plate!  
          In Nepali, <strong>Bari</strong> means the small farm near our homes, and  
          <strong>Tarkari</strong> means vegetables—a reflection of our deep-rooted  
          tradition of growing and enjoying fresh, chemical-free produce.
        </p>
        <br />
        <h2>🥕 Why Choose Us?</h2>
        <ul>
          <li>🚜 <strong>Farm-to-Table Freshness:</strong> Hand-picked, naturally grown vegetables.</li>
          <li>🌍 <strong>Supporting Local Farmers:</strong> Your choice helps small farmers thrive.</li>
          <li>🍃 <strong>100% Chemical-Free:</strong> We believe in healthy, organic farming.</li>
        </ul>
        <br />
        <h2>🌾 Join the Fresh Revolution!</h2>
        <p>
          By choosing <strong>Bari Ko Tarkari</strong>, you're not just buying vegetables—you're 
          becoming part of a sustainable movement that values freshness, quality, and community well-being.
        </p>

      </div>
      <Footer />
    </>
  );
}
