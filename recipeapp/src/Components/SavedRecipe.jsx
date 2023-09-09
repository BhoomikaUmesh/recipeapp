import React from 'react'

function SavedRecipe() {
  return (
    <div>
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
          /* Define a CSS class for the different font */
  .different-font {
    font-family: 'Courier New', sans-serif;
    /* Add your desired font-family here */
  }
        `}
      </style>

      
   


      <section className="featured-recipes">
      <h2 className="different-font">SAVED RECIPES!</h2>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/05/broccoli-cakes-14.jpg" alt="Recipe 1" />
              <h3>BROCCOLI QUINOA CAKES!</h3>
              <p>These Broccoli Quinoa Cakes can be made in 30 minutes flat & are a delicious vegetarian dinner recipe that your whole family will love! Serve them up with Simple Sauteed Greens or a beautiful Mediterranean Chard Salad and top them with your favorite sauce!</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.tablefortwoblog.com/wp-content/uploads/2022/06/eggplant-parmesan-recipe-photo-tablefortwoblog-2-scaled.jpg" alt="Recipe 2" />
              <h3>CHEESE EGGPLANT LASAGNA</h3>
              <p>Eggplant Lasagna- a cozy, hearty vegetarian dinner recipe made easy with no-boil noodles. Top it off with flavorful Arugula Almond Pesto! Keto, GF and Vegan-adaptable! This delicious Eggplant Lasagna is so warm and comforting -a dish you will love</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/11/mushroom-loaf-31-1.jpg" alt="Recipe 3" />
              <h3>SAGEY MUSHROOM WALNUT ROAST</h3>
              <p>Sagey Mushroom Walnut Roast- a savory, hearty vegetarian meal, perfect for the Sunday supper or the holiday table. Make this ahead and serve with Mushroom gravy and Mashed Potatoes. This is the most demanded in the restaurants in the Asian countries.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2019/09/Vegetarian-Enchiladas_-12.jpg" alt="Recipe 1" />
              <h3>FARMERS MARKET VEGGIE ENCHILADAS</h3>
              <p>These Broccoli Quinoa Cakes can be made in 30 minutes flat & are a delicious vegetarian dinner recipe that your whole family will love! Serve them up with Simple Sauteed Greens or a beautiful Mediterranean Chard Salad and top them with your favorite sauce!.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2021/09/Italian-Baked-Beans-26.jpg" alt="Recipe 2" />
              <h3>ITALIAN BAKED BEANS AND GREENS</h3>
              <p>Eggplant Lasagna- a cozy, hearty vegetarian dinner recipe made easy with no-boil noodles. Top it off with flavorful Arugula Almond Pesto! Keto, GF and Vegan-adaptable! This delicious Eggplant Lasagna is so warm and comforting -a dish you will love</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2016/04/easy-authentic-pad-thai-recipe-100-7.jpg" alt="Recipe 3" />
              <h3>EASY TO MAKE PAD THAI W/ TOFU</h3>
              <p>Sagey Mushroom Walnut Roast- a savory, hearty vegetarian meal, perfect for the Sunday supper or the holiday table. Make this ahead and serve with Mushroom gravy and Mashed Potatoes. This is the most demanded in the restaurants in the Asian countries.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2021/09/Fregola-Recipe-19.jpg" alt="Recipe 1" />
              <h3>FREGOLA WITH CORN, ZUCCHINI & BASIL</h3>
              <p>These Broccoli Quinoa Cakes can be made in 30 minutes flat & are a delicious vegetarian dinner recipe that your whole family will love! Serve them up with Simple Sauteed Greens or a beautiful Mediterranean Chard Salad and top them with your favorite sauce!</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2021/03/vegetable-fried-rice_-3.jpg" alt="Recipe 2" />
              <h3>FARMERS MARKET FRIED RICE</h3>
              <p>Eggplant Lasagna- a cozy, hearty vegetarian dinner recipe made easy with no-boil noodles. Top it off with flavorful Arugula Almond Pesto! Keto, GF and Vegan-adaptable! This delicious Eggplant Lasagna is so warm and comforting -a dish you will love</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.crowdedkitchen.com/wp-content/uploads/2020/04/Polenta-with-mushrooms-12.jpg" alt="Recipe 3" />
              <h3>CREAMY POLENTA WITH WILD MUSHROOMS</h3>
              <p>Sagey Mushroom Walnut Roast- a savory, hearty vegetarian meal, perfect for the Sunday supper or the holiday table. Make this ahead and serve with Mushroom gravy and Mashed Potatoes. This is the most demanded in the restaurants in the Asian countries.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/05/broccoli-cakes-14.jpg" alt="Recipe 1" />
              <h3>BROCCOLI QUINOA CAKES!</h3>
              <p>These Broccoli Quinoa Cakes can be made in 30 minutes flat & are a delicious vegetarian dinner recipe that your whole family will love! Serve them up with Simple Sauteed Greens or a beautiful Mediterranean Chard Salad and top them with your favorite sauce</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.tablefortwoblog.com/wp-content/uploads/2022/06/eggplant-parmesan-recipe-photo-tablefortwoblog-2-scaled.jpg" alt="Recipe 2" />
              <h3>CHEESE EGGPLANT LASAGNA</h3>
              <p>Eggplant Lasagna- a cozy, hearty vegetarian dinner recipe made easy with no-boil noodles. Top it off with flavorful Arugula Almond Pesto! Keto, GF and Vegan-adaptable! This delicious Eggplant Lasagna is so warm and comforting -a dish you will love</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/11/mushroom-loaf-31-1.jpg" alt="Recipe 3" />
              <h3>SAGEY MUSHROOM WALNUT ROAST</h3>
              <p>Sagey Mushroom Walnut Roast- a savory, hearty vegetarian meal, perfect for the Sunday supper or the holiday table. Make this ahead and serve with Mushroom gravy and Mashed Potatoes. This is the most demanded in the restaurants in the Asian countries.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/05/broccoli-cakes-14.jpg" alt="Recipe 1" />
              <h3>BROCCOLI QUINOA CAKES!</h3>
              <p>These Broccoli Quinoa Cakes can be made in 30 minutes flat & are a delicious vegetarian dinner recipe that your whole family will love! Serve them up with Simple Sauteed Greens or a beautiful Mediterranean Chard Salad and top them with your favorite sauce.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.tablefortwoblog.com/wp-content/uploads/2022/06/eggplant-parmesan-recipe-photo-tablefortwoblog-2-scaled.jpg" alt="Recipe 2" />
              <h3>CHEESE EGGPLANT LASAGNA</h3>
              <p>Eggplant Lasagna- a cozy, hearty vegetarian dinner recipe made easy with no-boil noodles. Top it off with flavorful Arugula Almond Pesto! Keto, GF and Vegan-adaptable! This delicious Eggplant Lasagna is so warm and comforting -a dish you will love</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/11/mushroom-loaf-31-1.jpg" alt="Recipe 3" />
              <h3>SAGEY MUSHROOM WALNUT ROAST</h3>
              <p>Sagey Mushroom Walnut Roast- a savory, hearty vegetarian meal, perfect for the Sunday supper or the holiday table. Make this ahead and serve with Mushroom gravy and Mashed Potatoes. This is the most demanded in the restaurants in the Asian countries.</p>
              <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
              <img src="https://www.feastingathome.com/wp-content/uploads/2020/11/mushroom-loaf-31-1.jpg" alt="Recipe 3" />
              <h3>SAGEY MUSHROOM WALNUT ROAST</h3>
              <p>These Broccoli Quinoa Cakes can be made in 30 minutes flat & are a delicious vegetarian dinner recipe that your whole family will love! Serve them up with Simple Sauteed Greens or a beautiful Mediterranean Chard Salad and top them with your favorite sauce</p>
              <a href="#">View Recipe</a>
          </div>
          
      </section>

      <footer>
          <p>&copy; 2023 Recipe Website</p>
      </footer>
    </div>
    </div>
  )
}

export default SavedRecipe