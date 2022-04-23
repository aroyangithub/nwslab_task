
import { useEffect, useState } from 'react';
import './App.css';
import { allCategories, allCats, getDataCats } from './store/action';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MyRouter } from './router/Router';

function App() {


  let [catId, setCatId] = useState('')
  const [categorie, setCategorie] = useState('')



  const dispatch = useDispatch()
  const getDataCats = () => {
    return function (dispach) {
      axios
        .get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1`)
        .then((res) => {
          console.log(res);
          dispach(allCats(res.data))
        })
        .catch((e) => console.log(e));
    };
  };

  const info = useSelector(st => st)
  console.log('cats====>', info.store.cats)

  useEffect(() => {
    dispatch(getDataCats())

  }, [])

  const load = () => {
    info.store.categories?.map((e) => {
      if (categorie == e.name) {
        catId = e.id
        setCatId()
      }
      console.log(catId)

    })
  }
  return (
    <div className='app'>

      <MyRouter></MyRouter>


      <div className="pict">
        {info.store.cats?.map((e, i) => {
          // console.log('cat====>', e.categories)
          return (
            <img key={i} src={e.url}></img>
          )
        })}


      </div>



      <br></br>
      <br></br>
      <br></br>
      <div className='button'>
        <button onClick={load}>Load Cats</button>
      </div>
    </div>
  );
}

export default App;
