import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../services/LanguageContainer";
import { dbMirrorNewStockItem } from "../../helpers/dbMirror";
import { FormattedMessage } from "react-intl";
import { IconButton } from "@mui/material";
import ReactPaginate from "react-paginate";
import { StockForm } from "./StockForm";
import {
  Container,
  CardDiv,
  CardBodyDiv,
  CardTitleDiv,
  FlexDivStructure,
} from "../../styles/divStyles";
import {
  CardTitleSpan,
  StyledAddIcon,
  ErrorSPan,
} from "../../styles/textStyles";

import {
  createEndpoint,
  deleteEndpoint,
  getEndpointBypage,
  getEndpointTotalRecords,
  updateEndpoint,
  getSearchEndpoint,
  getSearchEndpointTotalRecords,
} from "../../services/backend";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingContent } from "../../components/LoadingContent";
import { MUITextfield } from "../../components/MUITextField";

const Stock = () => {
  
  const langContext = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState();
  const [search, setSearch] = useState("");

  const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debounceValue;
  };

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debounceSearch) {
      Promise.all([
        getSearchEndpoint(page, limit, "stock", "itemName", debounceSearch),
        getSearchEndpointTotalRecords(
          limit,
          "stock",
          "itemName",
          debounceSearch
        ),
      ])
        .then(([searchQueryresult, totalRegResult]) => {
          setStock(searchQueryresult);
          setTotalPages(totalRegResult);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      Promise.all([
        getEndpointBypage(page, limit, "stock", "itemName"),
        getEndpointTotalRecords(limit, "stock"),
      ])
        .then(([list, totalReg]) => {
          setStock(list);
          setTotalPages(totalReg);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [debounceSearch, page, limit]);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  let mainJsx = <LoadingContent />;

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  const handlePropertyUpdate = (evt, source, index) => {
    
    evt.preventDefault();
    let text = evt.target.value;
    let handleStock = [...stock];

    /*eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]*/
    switch (source) {
      case "itemName":
        handleStock[index].itemName = text;
        break;
      case "measurement":
        handleStock[index].measurement = text;
        handleSave(evt, index);
        break;
      //skip default
    }
    setStock(handleStock);
  };

  const handleValueUpdate = (value, index, source) => {
    let handleStock = [...stock];

    /*eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]*/
    switch (source) {
      case "quantity":
        handleStock[index].quantity = value;
        break;
      case "minQuantity":
        handleStock[index].minQuantity = value;
        break;
      //skip default
    }
    setStock(handleStock);
  };

  function handleSave(evt, index) {
    
    evt.preventDefault();
    let handleStock = [...stock];
    updateEndpoint(handleStock[index], "stock").catch(function () {
      toast.error(
        langContext.locale === "pt-BR"
          ? "Erro na conexão com o banco de dados. Cheque sua conexão com a internet."
          : "Error connecting to the database. Check your internet connection."
      );
    });
  }

  const addItem = () => {
    let handleStock = [...stock];
    let newItem = dbMirrorNewStockItem();
    handleStock.push(newItem);
    setStock(handleStock);
    createEndpoint(newItem, "stock");
    
  };

  const remItem = (evt, id) => {
    
    evt.preventDefault();
    let handleStock = [...stock];
    let removedItem = handleStock[id];
    handleStock.splice(id, 1);
    setStock(handleStock);
    deleteEndpoint(removedItem.id, "stock");
  };

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
        <CardDiv>
          <CardTitleDiv alignItems={"center"} justifyContent={"space-between"}>
            <CardTitleSpan>
              <FormattedMessage
                id="stock.stockSearch"
                defaultMessage={"Search product in stock: "}
              />
            </CardTitleSpan>
          </CardTitleDiv>

          <CardBodyDiv margX={"0"} padX="10px">
            <MUITextfield
              size="small"
              value={search}
              type="search"
              fullWidth
              label={
                langContext.locale === "pt-BR"
                  ? "Nome do produto"
                  : "Product name"
              }
              variant="outlined"
              onChange={handleSearch}
            />
          </CardBodyDiv>
        </CardDiv>
        <CardDiv>
          <CardTitleDiv alignItems={"center"} justifyContent={"space-between"}>
            <CardTitleSpan>
              <FormattedMessage
                id="stock.stockTitle"
                defaultMessage={"Products in stock: "}
              />
            </CardTitleSpan>
            <IconButton onClick={addItem}>
              <StyledAddIcon fontSize="large" />
            </IconButton>
          </CardTitleDiv>

          <CardBodyDiv margX={"0"} padX="10px">
            {stock.length === 0
              ? langContext.locale === "pt-BR"
                ? "Ainda não há produtos no estoque. Comece criando um."
                : "There is no product in stock. Start creating one."
              : ""}

            <StockForm
              editingStock={stock}
              itemSave={handleSave}
              itemUpdate={handlePropertyUpdate}
              valueUpdate={handleValueUpdate}
              addItemUpdate={addItem}
              remItemUpdate={remItem}
            />
          </CardBodyDiv>
          <FlexDivStructure padX={"5px"}>
            <FormattedMessage
              id="app.resultsPerPage"
              defaultMessage="Results per page"
            />

            <MUITextfield
              select
              size="small"
              SelectProps={{
                native: true,
              }}
              sx={{
                width: "65px",
              }}
              defaultValue={3}
              onChange={(evt) => setLimit(evt.target.value)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </MUITextfield>
            <ReactPaginate
              previousLabel={
                langContext.locale === "pt-BR" ? "Anterior" : "Previous"
              }
              breakLabel={"..."}
              nextLabel={langContext.locale === "pt-BR" ? "Próximo" : "Next"}
              pageCount={totalPages}
              marginPagesDisplayed={3}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              //Ul css style, only accept strings
              containerClassName={"paginationUl"}
              //css of the LI tag
              pageClassName={"paginationLi"}
              //CSS of the A tag
              pageLinkClassName={"paginationLink"}
              previousClassName={"paginationSpan"}
              nextClassName={"paginationSpan"}
              breakClassName={"paginationLi"}
              breakLinkClassName={"paginationLi"}
              activeClassName={"paginationLiActive"}
            />
          </FlexDivStructure>
        </CardDiv>
      </>
    );
  }

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {mainJsx}
    </Container>
  );
};
export { Stock };
