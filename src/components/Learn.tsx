import React, { useState } from "react"; 

const Learn = () => {
  const slides = [
    {
      title: "About",
      img: "./ChefHat.png", 
      description:
        "Culinix is your new sous-chef to help you cook smarter and more efficiently.",
    },
    {
      title: "General Info",
      img: "./ChefHat.png",  
      description: "PREP keyword for the pre-start program section. START and END wrap the start and end of the program. Ingredients and recipes more than one word long need quotations. Recipes are case sensitive.", 
    },
    {
      title: "Prep",
      img: "./Prep.png",  
      description:
        "Users can preload recipes into their recipe book or leave it blank.",
    },
    {
      title: "Mix",
      img: "./Mix.png",  
      description:
        "Declare and asign variables to a recipe.",
    },
    {
      title: "Cook",
      img: "./Cook.png",  
      description:
        "Try combining ingredients in the variable. Cooking is completed if the recipe is correct.",
    },
    {
      title: "Serve",
      img: "./Serve.png",  
      description:
        "If coooking was completed, return the dish that was made.",
    },
    {
      title: "Load",
      img: "./Load.png",  
      description:
        "Add recipes to the recipe book in list format.",
    },
    {
      title: "View",
      img: "./View.png",  
      description:
        "Find a specific recipe or 'view all' to see entire recipe collection.",
    },
    {
      title: "For",
      img: "./For.png",  
      description:
        "Input a recipe name or specific ingredient with action as 'ingredients' or 'recipes' respectively. Return ingredients for all recipes with the keyword (i.e. all Pasta recipes) or return all recipes containing the ingredient.",
    },
    {
      title: "Edit",
      img: "./Edit.png",  
      description:
        "Remove first instance of specified recipe ingredient. Rewrite entire recipe with 'new' keyword. Replace ingredient a with ingredient b.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="Bg"> 
    <div className="learn">
      <h1>
        <span style={{ color: '#cc6600' }}>Culin</span>
        <span style={{ color: '#cb2127' }}>ix 101</span>
      </h1>
      <div className="horizontal"> 
        <div className="search">
            <a href="/">Home</a>
        </div>   
        <div className="search">
          <a href="https://github.com/jenniferrzhu/Culinix">GitHub</a>
      </div> 
      </div>
      <div className="slide-container">
      <h2>{slides[currentSlide].title}</h2>
        <img
          src={slides[currentSlide].img}
          alt={slides[currentSlide].title}
          className="slide-image"
        />
        <p>{slides[currentSlide].description}</p>
      </div>
      <div className="navigation">
        <button onClick={prevSlide} className="nav-button">
          &lt;  
        </button>
        <button onClick={nextSlide} className="nav-button">
          &gt;  
        </button>
      </div>    
    </div>
    </div>
  );
};

export default Learn;
