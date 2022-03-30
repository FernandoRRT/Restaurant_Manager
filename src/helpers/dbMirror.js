import { getNewId } from "./getNewId";

export const dbMirrorNewDish = {
  id: null,
  name: "",
  value: 0,
  cost: 0,
  ingredients: [
    {
      id: getNewId(),
      component: "",
      purPrice: 0.0,
      preparationLoss: 1,
      requiredUn: 0,
      measurementUn: "unit",
      purQty: 0,
      purUnit: "unit",
      unitCost: 0,
    },
  ],
};

const dbMirrorNewIngredient = () => {
  let NewIngredient = {
    id: getNewId(),
    component: "",
    purPrice: 0,
    preparationLoss: 1,
    requiredUn: 0,
    measurementUn: "unit",
    purQty: 0,
    purUnit: "unit",
    unitCost: 0,
  };
  return NewIngredient;
};
export { dbMirrorNewIngredient };

const dbMirrorNewStockItem = () => {
    let NewItem = {
        id: getNewId(),
        itemName: "",
        quantity: 0,
        measurement: "unit",
        minQuantity: 0,
      };
      return NewItem;  
};
export { dbMirrorNewStockItem };



