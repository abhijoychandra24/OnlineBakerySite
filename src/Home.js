import React from 'react';
import Product from './Product';
import './Home.css';


function Home() {
    return(
        <div className="home">
            <img
            className="home__image"
            src="./images/home_1.jpg" 
            alt="" />
            <img
            className="home__image"
            src="./images/home_1.jpg" 
            alt="" />
            <div className="home__row">
                <Product
                    id="1"
                    title="Black Forest"
                    price={450}
                    image="./images/black_forest.jpg"                
                />
                <Product
                    id="2"
                    title="Black Forest"
                    price={359}
                    image="./images/black_forest.jpg"                
                />
                <Product
                    id="3"
                    title="Black Forest"
                    price={479}
                    image="./images/black_forest.jpg"                
                />
                <Product
                    id="4"
                    title="Black Forest"
                    price={489}
                    image="./images/black_forest.jpg"                
                />
                <Product
                    id="5"
                    title="Black Forest"
                    price={439}
                    image="./images/black_forest.jpg"                
                />
                <Product
                    id="6"
                    title="Black Forest"
                    price={369}
                    image="./images/black_forest.jpg"                
                />
                <Product
                    id="7"
                    title="Black Forest"
                    price={384}
                    image="./images/black_forest.jpg"                
                />
            </div>
        </div>
    );
}

export default Home;
