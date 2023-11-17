import { useReducer, useEffect } from "react";

function TwentyThree() {
  const data = Array.from({ length: 25 }, (_, item) => `ITEM ${item + 1}`);
  const itemsPerPage = 5;

  const initialState = {
    currentPage: 1,
    data: [],
    loading: true,
  };

  const paginationReducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, data: action.payload, loading: false };
      case "NEXT_PAGE":
        return { ...state, currentPage: state.currentPage + 1 };
      case "PREV_PAGE":
        return { ...state, currentPage: state.currentPage - 1 };
      default:
        return state;
    }
  };

  const fetchData = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 400));
  };

  const [state, dispatch] = useReducer(paginationReducer, initialState);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const newData = await fetchData();
      dispatch({ type: "SET_DATA", payload: newData });
    };
    fetchDataAndSetData();
  }, []); 
  const { currentPage, loading } = state;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Pagination</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {currentItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() => dispatch({ type: "PREV_PAGE" })}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span> Page {currentPage} </span>
          <button
            onClick={() => dispatch({ type: "NEXT_PAGE" })}
            disabled={endIndex >= data.length}
          >
            Next Page
          </button>
        </>
      )}
    </div>
  );
}

export default TwentyThree;
