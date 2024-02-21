'use client';
import { Hero ,CustomFilter , SearchBar ,CarCard, ShowMore} from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default  function Home() {
  const [allCars,setAllCars]=useState([]);
  const [loading,setLoading]=useState(false);
  const [manuFacturer, setManuFacturer ] = useState('');
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('') ;
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10 ) ;   
  const getCars = async ()=>{
    setLoading(true);

    try {
      const result = await fetchCars({

        manuFacturer:manuFacturer ||'',
        year:year ||2023,
        fuel:fuel ||'',
        limit:limit ||10,
        model:model ||'',
        
      });
  
      setAllCars(result);
      
    } catch (error) {
      console.log(error)
      
    }finally{
      setLoading(false);
    }
                            }       
  useEffect(()=>{
    getCars();

  },[fuel,year,limit,model,manuFacturer]) 

 
  return (
    
    <main className='overflow-hidden'>
        <Hero/>
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
              <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                <p>Explore out cars you might like</p>
              </div>

              <div className='home__filters'>
                <SearchBar setManuFacturer={setManuFacturer} 
                setModel={setModel}
                />
              
                <div className='home__filter-container'>

                  <CustomFilter options={fuels} setFilter={setFuel}/>
                  <CustomFilter  options={yearsOfProduction} setFilter={setYear} />
                </div>

              </div>

          {allCars.length>0 ? (

            
          <section>
            
          <div className='home__cars-wrapper'>
            {allCars?.map((car)=>(<CarCard car={car}/>))}

            </div> 
            {loading&& (
              <div className='mt-16 w-full flex-center'>
              <Image
                src='/loader.svg'
                width={50}
                height={50}
                alt='loader'
                className='object-contain'
                />
              </div>
            )}
            <ShowMore 
            pageNumber={limit /10}
            isNext ={limit> allCars.length}
            setLimit={setLimit}
            />
            </section>
          ):(   
          <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>oops , no resultts </h2>
          <p>{allCars}</p>
          </div>

          ) }

        </div>
    </main>
  )
}
