import React, { useContext } from "react";
import { LanguageContext } from "../../services/LanguageContainer";
import { IconButton } from "@mui/material";
import { measurementUnits } from "../../helpers/measurementUnits";
import NumberFormat from "react-number-format";
import {
  InnerCardBodyDiv,
  GridDivStructure,
  FlexDivStructure,
} from "../../styles/divStyles";
import {
  StyledAddIcon,
  StyledRemoveIcon,
} from "../../styles/textStyles";
import { MUITextfield } from "../../components/MUITextField";


const StockForm = ({
  editingStock = [],
  itemUpdate = null,
  valueUpdate = null,
  itemSave = null,
  addItemUpdate = null,
  remItemUpdate = null
}) => {
  

  let stock = editingStock;
  const langContext = useContext(LanguageContext);

  const handleProperty = (evt, source, index) => {
    
    if (itemUpdate) {
      itemUpdate(evt, source, index);
    }
  };

  const handleValue = (value, index, source) => {
    if (valueUpdate) {
      valueUpdate(value, index, source);
    }
  };

  function handleSaveItem(evt, index) {
    if (itemSave) {
      itemSave(evt, index);
    }
  }


  const handleAddItem = () => {
    if (addItemUpdate) {
      addItemUpdate();
    }
  };

  const handleRemItem = (evt, id) => {
    if (remItemUpdate) {
      remItemUpdate(evt, id);
    }
  };



  return (
<>
             
            {stock.map((stocks, index) => (
              <InnerCardBodyDiv key={index} margX={"-5px 0 0 0"}>
                <GridDivStructure
                  templateOrder={"50px 1fr"}
                  spaceGap={"5px"}
                  alignItems={"center"}
                >
                  <IconButton onClick={(evt) => handleRemItem(evt, index)}>
                    <StyledRemoveIcon fontSize="large" />
                  </IconButton>
                  
                  <MUITextfield
                    size="small"
                    value={stocks.itemName ?? ""}
                    fullWidth
                    label={
                      langContext.locale === "pt-BR"
                        ? "Nome do produto"
                        : "Product name"
                    }
                    variant="outlined"
                    onChange={(evt) => handleProperty(evt, "itemName", index)}
                    onBlur={(evt) => handleSaveItem(evt, index)}
                  />
                </GridDivStructure>

                <FlexDivStructure justifyContent={"center"}>
                  <NumberFormat
                    customInput={MUITextfield}
                    size="small"
                    value={stocks.quantity}
                    sx={{
                      width: "85px",
                    }}
                    variant="outlined"
                    label={
                      langContext.locale === "pt-BR"
                        ? "Qdt atual"
                        : "Current qty"
                    }
                    decimalSeparator={
                      langContext.locale === "pt-BR" ? "," : "."
                    }
                    decimalScale={2}
                    fixedDecimalScale={true}
                    autoComplete="off"
                    onValueChange={(values) =>
                      handleValue(values.floatValue, index, "quantity")
                    }
                    onBlur={(evt) => handleSaveItem(evt, index)}
                  />
                  <MUITextfield
                    select
                    size="small"
                    label={langContext.locale === "pt-BR" ? "Tipo" : "Type"}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{
                      width: "83px",
                    }}
                    value={stocks.measurement}
                    onChange={(evt) =>
                      handleProperty(evt, "measurement", index)
                    }

                  >
                    {measurementUnits.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </MUITextfield>
                  <NumberFormat
                    customInput={MUITextfield}
                    size="small"
                    value={stocks.minQuantity}
                    sx={{
                      width: "70px",
                    }}
                    variant="outlined"
                    label={
                      langContext.locale === "pt-BR" ? "Qdt min" : "Min qty"
                    }
                    decimalSeparator={
                      langContext.locale === "pt-BR" ? "," : "."
                    }
                    decimalScale={2}
                    fixedDecimalScale={true}
                    autoComplete="off"
                    onValueChange={(values) =>
                      handleValue(values.floatValue, index, "minQuantity")
                    }
                    onBlur={(evt) => handleSaveItem(evt, index)}
                  />
                  <IconButton onClick={handleAddItem}>
                    <StyledAddIcon fontSize="large" />
                  </IconButton>
                </FlexDivStructure>
              </InnerCardBodyDiv>
            ))}
      </>
  );
};
export { StockForm };



