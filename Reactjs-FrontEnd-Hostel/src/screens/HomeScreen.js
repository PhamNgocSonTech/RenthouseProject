import React, { useReducer } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import houseApi from "../api/houseApi";
import logger from "use-reducer-logger";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { useParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, rooms: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const HomeScreen = () => {
  const [{ rooms, loading, error }, dispatch] = useReducer(logger(reducer), {
    rooms: [],
    loading: true,
    error: "",
  });
  const { category } = useParams();
  const categoryId = category;
  console.log("category", categoryId);

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     dispatch({ type: "FETCH_REQUEST" });
  //     try {
  //       const response = await houseApi.getAllRoom();
  //       console.log("Fetch products successfully: ", response.results);
  //       // setRooms(response.results.slice(0, 9));
  //
  //     } catch (error) {
  //       dispatch({ type: "FETCH_FAIL", payload: getError(error) });
  //       console.log("Failed to fetch product list: ", error);
  //     }
  //   };
  //   fetchRooms();
  // }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
// <<<<<<< HEAD
        // const response = await houseApi.getAllRoom();
        // console.log("Fetch products successfully: ", response.results);
        // // setRooms(response.results.slice(0, 9));
        // dispatch({
        //   type: "FETCH_SUCCESS",
        //   // payload: response.results.slice(0, 9),
        //   payload: response.results

        // });
// =======
        if (categoryId) {
          const response = await houseApi.getRoomByCate(categoryId);
          console.log("Fetch products successfully: ", response.result);
          // setRooms(response.results.slice(0, 9));
          dispatch({
            type: "FETCH_SUCCESS",
            payload: response.result,
          });
        } else {
          const response = await houseApi.getAllRoom();
          dispatch({
            type: "FETCH_SUCCESS",
            payload: response.results.slice(0, 9),
          });
        }
// >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchRooms();
  }, [categoryId]);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="products">
{/* <<<<<<< HEAD */}
        {/* <div style={{marginTop:'20px'}}>------------</div> */}
{/* // ======= */}
        <h1></h1>
{/* >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4 */}
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {rooms.map((item) => (
              <Col sm={6} md={4} lg={4} className="mb-3" key={item.objectId}>
{/* <<<<<<< HEAD
                <Product room={item}></Product>
======= */}
                {/* <Product product={item}></Product> */}
                <Product room={item}></Product>
{/* >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4 */}
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
