import React from 'react'

function Home() {
  return (
    <div>
      <style>
        {`
          /* Reset some default styles */
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }

          body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
          }

          /* Header */
          header {
              background-color: #333;
              color: #fff;
              text-align: center;
              padding: 20px 0;
          }

          header h1 {
              font-size: 36px;
          }

          nav ul {
              list-style: none;
          }

          nav ul li {
              display: inline;
              margin-right: 20px;
          }

          nav ul li a {
              text-decoration: none;
              color: #fff;
              font-weight: bold;
          }

          /* Hero Section */
          .hero {
              background-image: url('hero-image.jpg');
              background-size: cover;
              text-align: center;
              color: #fff;
              padding: 100px 0;
          }

          .hero h2 {
              font-size: 48px;
          }

          .hero p {
              font-size: 24px;
              margin-top: 20px;
          }

          .btn {
              display: inline-block;
              padding: 10px 20px;
              background-color: #FF5733;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              font-size: 18px;
              margin-top: 20px;
          }

          /* Featured Recipes Section */
          .featured-recipes {
              text-align: center;
              margin: 40px 0;
          }

          .recipe-card {
              display: inline-block;
              text-align: left;
              background-color: #f9f9f9;
              border: 1px solid #ddd;
              border-radius: 5px;
              padding: 20px;
              margin: 20px;
              width: 300px;
          }

          .recipe-card img {
              max-width: 100%;
              height: auto;
          }

          .recipe-card h3 {
              font-size: 24px;
              margin-top: 10px;
          }

          .recipe-card p {
              font-size: 16px;
              margin-top: 10px;
          }

          .recipe-card a {
              display: inline-block;
              background-color: #FF5733;
              color: #fff;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 5px;
              font-weight: bold;
              margin-top: 10px;
          }

          /* Footer */
          footer {
              background-color: #333;
              color: #fff;
              text-align: center;
              padding: 10px 0;
          }
        `}
      </style>

      <header>
          <h1>Delicious Recipes</h1>
          
      </header>

      <section className="hero" style={{ backgroundImage: "url('https://images.pexels.com/photos/5490999/pexels-photo-5490999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg')" }}>
    <h2>Welcome to Our Recipe Website</h2>
    <p>Discover mouthwatering recipes for every occasion.</p>
   
</section>

      <section className="featured-recipes">
          <h2>Featured Recipes</h2>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/05/broccoli-cakes-14.jpg" alt="Recipe 1" />
              <h3>BROCCOLI QUINOA CAKES!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.tablefortwoblog.com/wp-content/uploads/2022/06/eggplant-parmesan-recipe-photo-tablefortwoblog-2-scaled.jpg" alt="Recipe 2" />
              <h3>CHEESE EGGPLANT LASAGNA</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/11/mushroom-loaf-31-1.jpg" alt="Recipe 3" />
              <h3>SAGEY MUSHROOM WALNUT ROAST</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#">View Recipe</a>
          </div>
      </section>

      <footer>
          <p>&copy; 2023 Recipe Website</p>
      </footer>
    </div>
  )
}

export default Home