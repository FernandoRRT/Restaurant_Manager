import { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "../../services/LanguageContainer";
import { FormattedMessage, FormattedNumber } from "react-intl";
import NumberFormat from "react-number-format";
import { dbMirrorNewIngredient } from "../../helpers/dbMirror";
import {
  measurementFunctions,
  measurementUnits,
  preparationLoss,
} from "../../helpers/measurementUnits";

import {
  CardDiv,
  CardBodyDiv,
  GridDivStructure,
  FlexDivStructure,
  NoWrapFlexRowDiv,
  DishesGridDivStructure,
} from "../../styles/divStyles";

import {
  StyledAddIcon,
  StyledRemoveIcon,
  BtnSuccess,
  BtnWarning,
  BtnDanger,
  DishesFormErrorSpan,
} from "../../styles/textStyles";

import {
  createEndpoint,
  updateEndpoint,
  deleteEndpoint,
} from "../../services/backend";
import IconButton from "@mui/material/IconButton";

import { MUITextfield, MUIPlaceholder } from "../../components/MUITextField";

const DishForm = ({
  editingDish = null,
  onCancel = () => null,
  onSave = () => null,
  onDelete = () => null,
}) => {
  const [dish, setDish] = useState(editingDish);

  const [errors, setErrors] = useState({});
  const langContext = useContext(LanguageContext);

  const inputName = useRef();
  const inputValue = useRef();

  useEffect(() => {
    setDish(editingDish);
    setErrors({});
  }, [editingDish]);

  //   const isNew = !dish?.id;
  const isNew = !dish?.id;

  function validate() {
    //vai receber um objeto com o nome de dish
    if (dish) {
      const currentErrors = {};
      if (!dish.name) {
        currentErrors["name"] =
          langContext.locale === "pt-BR" ? "Insera um nome" : "Insert a name";
        inputName.current?.focus();
      }
      if (!dish.value) {
        currentErrors["value"] =
          langContext.locale === "pt-BR" ? "Insera um valor" : "Insert a price";
        inputValue.current?.focus();
      }
      setErrors(currentErrors);
      //se o resultado do Object.keys for 0 === 0, ele considera true, senão, false.
      return Object.keys(currentErrors).length === 0;
    }
    return false;
  }

  function save(evt) {
    evt.preventDefault();
    if (dish) {
      if (validate()) {
        if (isNew) {
          createEndpoint(dish, "dishes").then(onSave);
        } else {
          updateEndpoint(dish, "dishes").then(onSave);
        }
      }
    }
  }

  function deleteDish() {
    if (dish) {
      deleteEndpoint(dish.id, "dishes").then(onDelete);
    }
  }

  const handlePropertyUpdate = (evt, source, id) => {
    let text = evt.target.value;

    const { ingredients } = dish;
    /*eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]*/
    switch (source) {
      case "component":
        ingredients[id].component = text;
        break;
      case "preparationLoss":
        ingredients[id].preparationLoss = parseFloat(text);
        break;
      case "measurementUn":
        ingredients[id].measurementUn = text;
        break;
      case "purUnit":
        ingredients[id].purUnit = text;
        break;

      //skip default
    }
    ingredients[id].unitCost = refreshIngredientCost(id, ingredients);
    setDish({ ...dish, ingredients: ingredients });
    setTimeout(() => {
      refreshDishCost();
    }, 1000);
  };

  const handleValueUpdate = (value, id, text) => {
    const { ingredients } = dish;

    /*eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]*/
    switch (text) {
      case "purPrice":
        ingredients[id].purPrice = value;
        break;
      case "requiredUn":
        ingredients[id].requiredUn = value;
        break;
      case "purQty":
        ingredients[id].purQty = value;
        break;

      //skip default
    }

    ingredients[id].unitCost = refreshIngredientCost(id, ingredients);
    setDish({ ...dish, ingredients: ingredients });
    setTimeout(() => {
      refreshDishCost();
    }, 1000);
  };

  const addIngredient = () => {
    const { ingredients } = dish;
    ingredients.push(dbMirrorNewIngredient());
    setDish({ ...dish, ingredients: ingredients });
  };

  const remIngredient = (evt, id) => {
    evt.preventDefault();
    const { ingredients } = dish;
    ingredients.splice(id, 1);
    setDish({ ...dish, ingredients: ingredients });
  };

  const refreshIngredientCost = (id, ingredients) => {
    let buyPrice = ingredients[id].purPrice;
    let loss = ingredients[id].preparationLoss;
    let ingredientQty = ingredients[id].requiredUn;
    let ingredientUnit = ingredients[id].measurementUn;
    let buyQty = ingredients[id].purQty;
    let buyUnit = ingredients[id].purUnit;

    if (measurementFunctions[buyUnit].hasOwnProperty(ingredientUnit)) {
      let ingredientCost =
        (ingredientQty * buyPrice) /
        (measurementFunctions[buyUnit][ingredientUnit](buyQty) * loss);
      let setIngredientCost =
        isFinite(ingredientCost) && !isNaN(ingredientCost) ? ingredientCost : 0;
      return setIngredientCost;
    } else {
      return 0;
    }
  };

  const refreshDishCost = () => {
    let newDishCost = 0;
    dish.ingredients.map((ingredient) => (newDishCost += ingredient.unitCost));
    setDish({ ...dish, cost: newDishCost });
  };

  return (
    <>
      {!!dish ? (
        <CardDiv>
          <form onSubmit={save}>
            <DishesGridDivStructure  spaceGap={"20px"}>
              <div>
                <DishesFormErrorSpan>
                  {!!errors.name ? errors.name : null}
                </DishesFormErrorSpan>
              </div>
              <div>
                <DishesFormErrorSpan>
                  {!!errors.value ? errors.value : null}
                </DishesFormErrorSpan>
              </div>
            </DishesGridDivStructure>
            <DishesGridDivStructure alignItems={"center"} spaceGap={"20px"}>
              {/* The name dish textfield  */}

              <MUITextfield
                size="small"
                inputRef={inputName}
                value={dish.name}
                fullWidth
                label={
                  langContext.locale === "pt-BR" ? "Nome do Prato" : "Dish name"
                }
                variant="outlined"
                error={!!errors.name}
                onChange={(evt) =>
                  setDish((dish) => {
                    return {
                      ...dish,
                      name: evt.target.value,
                    };
                  })
                }
              />
              <GridDivStructure
                templateOrder={"1fr 1fr 50px"}
                spaceGap={"10px"}
              >
                {/* The sell price textfield */}
                <NumberFormat
                  customInput={MUITextfield}
                  variant="outlined"
                  size="small"
                  inputRef={inputValue}
                  value={dish.value}
                  fullWidth
                  label={
                    langContext.locale === "pt-BR" ? "Valor" : "Sell price"
                  }
                  decimalSeparator={langContext.locale === "pt-BR" ? "," : "."}
                  decimalScale={2}
                  prefix={langContext.locale === "pt-BR" ? "R$ " : "$ "}
                  fixedDecimalScale={true}
                  autoComplete="off"
                  error={!!errors.value}
                  onValueChange={(Values) =>
                    setDish((dish) => {
                      return { ...dish, value: Values.floatValue };
                    })
                  }
                />
                {/* This a read only field. It returns the total ingredients price */}
                <NumberFormat
                  customInput={MUITextfield}
                  variant="outlined"
                  size="small"
                  inputRef={inputValue}
                  value={dish.cost}
                  fullWidth
                  label={langContext.locale === "pt-BR" ? "Custo" : "Cost"}
                  decimalSeparator={langContext.locale === "pt-BR" ? "," : "."}
                  decimalScale={2}
                  prefix={langContext.locale === "pt-BR" ? "R$ " : "$ "}
                  fixedDecimalScale={true}
                  autoComplete="off"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <IconButton onClick={addIngredient}>
                  <StyledAddIcon fontSize="large" />
                </IconButton>
              </GridDivStructure>
            </DishesGridDivStructure>
            <DishesGridDivStructure alignItems={"center"}  spaceGap={"20px"}>
              <div>
              <FormattedMessage
                id="dishes.form.ingredientsInstructions"
                defaultMessage={
                  "To calculate the total cost of production you must enter the net amount of product used and purchased. E.g.: 300g. Also the loss rate on preparation. This rate tells how much of the product is wasted on preparation. "
                }
              />
              </div>
              <div>
              <FormattedMessage
                id="dishes.form.ingredientsPriceInstructions"
                defaultMessage={
                  "The cost of the dish represents the sum of the price of all ingredients in Dollars. This field is filled in automatically. Dish value is an arbitrary price you must put on your plate. We suggest at least 50% more than the cost of all ingredients."
                }
              />
              </div>
            </DishesGridDivStructure>
            {/* Ingredient block is created dinamically */}

            {dish.ingredients.map((ingredient, index) => (
              <CardBodyDiv key={index} margX={"10px 0"} padX={"10px"}>
                <DishesGridDivStructure alignItems={"center"} spaceGap={"0 20px"}>
                  <GridDivStructure templateOrder={"50px 1fr"}>
                    <IconButton onClick={(evt) => remIngredient(evt, index)}>
                      <StyledRemoveIcon fontSize="large" />
                    </IconButton>
                    {/* Ingredient name textfield */}
                    <MUITextfield
                      size="small"
                      value={ingredient.component}
                      label={
                        langContext.locale === "pt-BR"
                          ? "Nome do Ingrediente"
                          : "Ingredient name"
                      }
                      variant="outlined"
                      onChange={(evt) =>
                        handlePropertyUpdate(evt, "component", index)
                      }
                    />
                  </GridDivStructure>
                  <FlexDivStructure justifyContent={"space-between"} justifyContentSMBreakpoint={"center"}>
                    <NoWrapFlexRowDiv>
                      {/* Qty recpe textfield */}
                      <NumberFormat
                        customInput={MUITextfield}
                        size="small"
                        value={ingredient.requiredUn}
                        sx={{
                          width: "125px",
                        }}
                        variant="outlined"
                        label={
                          langContext.locale === "pt-BR"
                            ? "Qdt receita"
                            : "Recipe qty"
                        }
                        decimalSeparator={
                          langContext.locale === "pt-BR" ? "," : "."
                        }
                        decimalScale={2}
                        fixedDecimalScale={true}
                        autoComplete="off"
                        onValueChange={(values) =>
                          handleValueUpdate(
                            values.floatValue,
                            index,
                            "requiredUn"
                          )
                        }
                      />
                      {/* Measurement recipe requeriment textfield  */}
                      <MUITextfield
                        select
                        size="small"
                        label={
                          langContext.locale === "pt-BR"
                            ? "Medida"
                            : "Measurement"
                        }
                        SelectProps={{
                          native: true,
                        }}
                        sx={{
                          width: "110px",
                        }}
                        defaultValue={ingredient.measurementUn}
                        onChange={(evt) =>
                          handlePropertyUpdate(evt, "measurementUn", index)
                        }
                      >
                        {measurementUnits.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </MUITextfield>
                    </NoWrapFlexRowDiv>

                    <NoWrapFlexRowDiv>
                      {/* Market product sell qty textfield */}
                      <NumberFormat
                        customInput={MUITextfield}
                        size="small"
                        value={ingredient.purQty}
                        sx={{
                          width: "125px",
                        }}
                        variant="outlined"
                        label={
                          langContext.locale === "pt-BR"
                            ? "Qdt compra"
                            : "Purchase qty"
                        }
                        decimalSeparator={
                          langContext.locale === "pt-BR" ? "," : "."
                        }
                        decimalScale={2}
                        fixedDecimalScale={true}
                        autoComplete="off"
                        onValueChange={(values) =>
                          handleValueUpdate(values.floatValue, index, "purQty")
                        }
                      />
                      {/* Market measurement sell textfield */}
                      <MUITextfield
                        select
                        size="small"
                        label={
                          langContext.locale === "pt-BR"
                            ? "Medida"
                            : "Measurement"
                        }
                        SelectProps={{ native: true }}
                        sx={{ width: "110px" }}
                        defaultValue={ingredient.purUnit}
                        onChange={(evt) =>
                          handlePropertyUpdate(evt, "purUnit", index)
                        }
                      >
                        {measurementUnits.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </MUITextfield>
                    </NoWrapFlexRowDiv>
                  </FlexDivStructure>

                 


                  <FlexDivStructure>
                    <MUIPlaceholder
                      htmlFor="ingredientQty"
                      sx={{
                        whiteSpace: "unset",
                      }}
                    >
                      <FormattedMessage
                        id="dishes.form.ingredientsQuantity"
                        defaultMessage={
                          "Based on the ingredient amount bought and used. The unitary ingredient cost is: $ "
                        }
                      />
                      <FormattedNumber value={ingredient.unitCost.toFixed(2)} />
                    </MUIPlaceholder>
                  </FlexDivStructure>
                  

                  <GridDivStructure templateOrder={"1fr 1fr"} spaceGap={"20px"}>
                    {/* Market price textfield */}
                    <NumberFormat
                      customInput={MUITextfield}
                      isNumericString={false}
                      variant="outlined"
                      size="small"
                      value={ingredient.purPrice}
                      fullWidth
                      label={
                        langContext.locale === "pt-BR"
                          ? "Custo mercado"
                          : "Market cost"
                      }
                      decimalSeparator={
                        langContext.locale === "pt-BR" ? "," : "."
                      }
                      decimalScale={2}
                      prefix={langContext.locale === "pt-BR" ? "R$ " : "$ "}
                      fixedDecimalScale={true}
                      autoComplete="off"
                      onValueChange={(values) =>
                        handleValueUpdate(values.floatValue, index, "purPrice")
                      }
                    />
                    {/* Preparation loss textfield */}
                    <MUITextfield
                      select
                      size="small"
                      label={
                        langContext.locale === "pt-BR"
                          ? "Perda preparo"
                          : "Preparation loss"
                      }
                      SelectProps={{
                        native: true,
                      }}
                      fullWidth
                      defaultValue={ingredient.preparationLoss}
                      onChange={(evt) =>
                        handlePropertyUpdate(evt, "preparationLoss", index)
                      }
                    >
                      {preparationLoss.map((loss) => (
                        <option key={loss.value} value={loss.value}>
                          {loss.option}
                        </option>
                      ))}
                    </MUITextfield>
                  </GridDivStructure>




                </DishesGridDivStructure>
              </CardBodyDiv>
            ))}

            {/* <DishFormIngredient dishIngredients={dish.ingredients} /> */}
            <GridDivStructure templateOrder={"50px 1fr"}>
              <IconButton onClick={addIngredient}>
                <StyledAddIcon fontSize="large" />
              </IconButton>

              <FlexDivStructure justifyContent={"center"}>
                {!isNew && (
                  <BtnDanger type="button" onClick={deleteDish}>
                    <FormattedMessage
                      id="app.btnDelete"
                      defaultMessage={"Delete"}
                    />
                  </BtnDanger>
                )}
                <BtnWarning type="button" onClick={onCancel}>
                  <FormattedMessage
                    id="app.btnCancel"
                    defaultMessage={"Cancel"}
                  />
                </BtnWarning>
                <BtnSuccess type="submit" color="primary">
                  <FormattedMessage id="app.btnSave" defaultMessage={"Save"} />
                </BtnSuccess>
              </FlexDivStructure>
            </GridDivStructure>
          </form>
        </CardDiv>
      ) : null}
    </>
  );
};
export { DishForm };
