import { TYPE_CATEGORIES } from "./type";
import { TYPE_CATS} from "./type";
import { state } from "./state";

const reducer = (data = state, action) => {
    const temp = { ...data };
    switch (action.type) {
      case TYPE_CATS:
        temp.cats = action.value;
        break;
      case TYPE_CATEGORIES:
        temp.categories = action.value;
        break;
      
  
      default:
        break;
    }
    return temp;
  };
  export default reducer;
  