import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState.js';
//styles
import '../assets/styles/App.scss'
//vars
const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);

  console.log(initialState.originals.map(item => item.id))
  return (
    <div id="App" className="App">
      <Header />
      <Search />
        {initialState.mylist.length > 0 && (
          <Categories title="Mi Lista">
            <Carousel>
              {initialState.trends.map(item => 
                <CarouselItem key={item.id} {...item} />
              )}
            </Carousel>
          </Categories>
        )}

      <Categories title="Trends">
        <Carousel>
          {initialState.trends.map(item => 
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>
            {initialState.originals.map(item => 
              <CarouselItem key={item.id} {...item} />
            )}
        </Carousel>
      </Categories>
      
      <Footer />
    </div>
  );
}

export default App