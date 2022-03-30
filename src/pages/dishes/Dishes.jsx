/* eslint-disable react/style-prop-object */
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../services/LanguageContainer";
import { Icon } from "@material-ui/core";
import { dbMirrorNewDish } from "../../helpers/dbMirror";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { 
  Container,
  CardDiv,
  CardBodyDiv,
  CardTitleDiv,
  GridDivStructure,
  FlexDivStructure,
  DishesGridDivStructure,
  DishesStyledIconDiv,
} from "../../styles/divStyles";
import {  
  BtnSuccess,
  ErrorSPan,
  CardTitleSpan,
  DishesCardTitleSpan,
  DishesCardTextSpan,
  DishesCardSecondaryTextSpan,
  DishesCardCurrencyProfitSpan,
} from "../../styles/textStyles";
import {
  getEndpoint
} from "../../services/backend";
import { LoadingContent } from "../../components/LoadingContent";
import { DishForm } from "./DishForm";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dishes = () => {
  const langContext = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState("");
  const [editingDish, setEditingDish] = useState(null);

  useEffect(() => {
    getEndpoint('dishes')
      .then((list) => {setDishes(list);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  function refreshEvents() {
    getEndpoint('dishes')
      .then((list) => setDishes(list))
      .catch((error) => {
        setError(error.message);
      });
  }

  function createNewDish(evt) {
    evt.preventDefault();
    setEditingDish(dbMirrorNewDish);
  }

  function editDish (evt, chosenDish) {
    evt.preventDefault();
     setEditingDish (chosenDish); 
  }

  let mainJsx = <LoadingContent />;

  if (error) {
    mainJsx = (
      <>
        <ErrorSPan>{error}</ErrorSPan>);
      </>
    );
  }

  if (!loading && !error) {
    mainJsx = (
      <>
        {dishes.map((showDish, index) => (
          <CardBodyDiv padX={"10px"} key={index} onClick={(evt) =>
            editDish(evt, showDish)
          }>
            <GridDivStructure templateOrder={"60px 1fr"} spaceGap={"20px"} alignItems={"flex-start"}>
              <DishesStyledIconDiv
                marketValue={showDish.value}
                produtionValue={showDish.cost}
              >
                <Icon>dinner_dining</Icon>
              </DishesStyledIconDiv>
              <div>
                <FlexDivStructure>
                  <DishesCardTitleSpan>
                    <FormattedMessage
                      id="dishes.name"



                      defaultMessage={"Dish name: "}
                    />
                  </DishesCardTitleSpan>
                  <DishesCardTextSpan>{showDish.name}</DishesCardTextSpan>
                </FlexDivStructure>
                <FlexDivStructure>
                  <DishesCardTitleSpan>
                    <FormattedMessage
                      id="dishes.productionCost"
                      defaultMessage={"Production cost:"}
                    />
                  </DishesCardTitleSpan>
                  <DishesCardSecondaryTextSpan>
                    <FormattedNumber
                      value={showDish.cost}
                      style="currency"
                      currencyDisplay="symbol"
                      currency={langContext.locale === "pt-BR" ? "BRL" : "USD"}
                    />
                  </DishesCardSecondaryTextSpan>
                </FlexDivStructure>
                <FlexDivStructure>
                  <DishesCardTitleSpan>
                    <FormattedMessage
                      id="dishes.sellCost"
                      defaultMessage={"Sell cost:"}
                    />
                  </DishesCardTitleSpan>
                  <DishesCardSecondaryTextSpan>
                    <FormattedNumber
                      value={showDish.value}
                      style="currency"
                      currencyDisplay="symbol"
                      currency={langContext.locale === "pt-BR" ? "BRL" : "USD"}
                    />
                  </DishesCardSecondaryTextSpan>
                </FlexDivStructure>
                <FlexDivStructure>
                  <DishesCardTitleSpan>
                    <FormattedMessage
                      id="dishes.profit"
                      defaultMessage={"Profit:"}
                    />
                  </DishesCardTitleSpan>
                  <DishesCardCurrencyProfitSpan
                    marketValue={showDish.value}
                    produtionValue={showDish.cost}
                  >
                    <FormattedNumber
                      value={showDish.value - showDish.cost}
                      style="currency"
                      currencyDisplay="symbol"
                      currency={langContext.locale === "pt-BR" ? "BRL" : "USD"}
                    />
                  </DishesCardCurrencyProfitSpan>
                </FlexDivStructure>
              </div>
            </GridDivStructure>
          </CardBodyDiv>
        ))}
      </>
    );
  }

  return (
    <Container>
      <ToastContainer  position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      
        <DishForm
          editingDish={editingDish}
          onSave={() => {
            setEditingDish(null);
            refreshEvents();
            toast.success( langContext.locale === "pt-BR" ? "Prato editado com sucesso" : "Dish edited successfully!");
          }}
          onCancel={() => {
            setEditingDish(null);
            toast.info(langContext.locale === "pt-BR" ? "Edição cancelada" : "Edit canceled");
          }}
          onDelete={() => {
            toast.success( langContext.locale === "pt-BR" ? "Prato removido com sucesso" : "Dish removed successfully!");
            setEditingDish(null);
            refreshEvents();
          }}
        />
      
      <CardDiv>
      <CardTitleDiv justifyContent={"space-around"}>
        <CardTitleSpan>
          <FormattedMessage
            id="dishes.selectDish"
            defaultMessage={"Create or select a Dish to edit it"}
          /> 
        </CardTitleSpan>
        <BtnSuccess onClick={(evt) => createNewDish(evt)}
        >
          <FormattedMessage
            id="dishes.btnNewDish"
            defaultMessage={"New dish"}
          /> 
                </BtnSuccess>
        </CardTitleDiv>
        <CardDiv alignItems={"start"}>
          <DishesGridDivStructure spaceGap={"20px"}>
              {/* Dinamic block */}
              {mainJsx}
            
            </DishesGridDivStructure>
        </CardDiv>
      </CardDiv>
    </Container>
  );
};
export { Dishes };
