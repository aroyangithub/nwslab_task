import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { allCats } from "../store/action";
import { useEffect } from "react";
import axios from "axios";
export const Ties = () => {
  const dispatch = useDispatch()
  const getDataCats = () => {
    return function (dispach) {
      axios
        .get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7`)
        .then((res) => {
          console.log(res);
          dispach(allCats(res.data))
        })
        .catch((e) => console.log(e));
    };
  };

  const info = useSelector(st => st)
  console.log('boxes====>', info.store.cats)



  useEffect(() => {
    dispatch(getDataCats())

  }, [])
  return (
    <div>

      <div className="pict">
        {info.store.cats?.map((e, i) => {
         
          return (
            <img key={i} src={e.url}></img>
          )
        })}


      </div>
    </div>


  )
}