import { AddComp } from "./actions";
import { DeleteComp } from "./actions";

export const AddComponent = (data) => async (dispath) => {
  dispath({ type: AddComp, payload: data });
};
export const DeletComponent = (data, id) => async (dispath) => {
  let updated = data.filter((el) => el !== id);
  dispath({ type: DeleteComp, payload: updated });
};

// export const EditComponent=(data,id)=>async(dispath)=>{
//   let comp= data.find((el)=>el==id);
//   let updated= data.filter((el)=>el!==id);
//   dispath({type:DeleteComp, payload:updated});
// }
