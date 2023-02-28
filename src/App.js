import './App.css';
import Navbar from '../src/components/NavBar';
import Hero from '../src/components/Hero'
import Card  from '../src/components/Card';
import data from '../src/components/data'

export default function App() 
{
 
  const Cards = data.map(item =>{
    return (
      <Card 
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openspots={item.openSpots}
      />
  )
  })
  return (
    <>
     <Navbar />
     <Hero/>
     <section className='cards-list'>
         {Cards}
     </section>
     
    </>
  );
}

