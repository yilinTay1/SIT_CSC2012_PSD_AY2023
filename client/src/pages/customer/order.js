import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { SecuredBuy } from '../../components/firebase/SecuredBuy'

// Import other components
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import { SearchBar } from "../../components/customer_view/searchbar";
import { Mcd } from "../../components/customer_view/restaurant/mcd";
// import { RestCategory } from "../../components/customer_view/home/restCategory";
// import { BestSellers } from "../../components/customer_view/home/bestSellers";

// Search bar resource: https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.includes(query));
  }
};

const data = [
  // "Paris",
  // "London",
  // "New York",
  // "Tokyo",
  // "Berlin",
  // "Buenos Aires",
  // "Cairo",
  // "Canberra",
  // "Rio de Janeiro",
  // "Dublin",
];
const Home = () => {
  const runOnce = useRef(true);
  const [ buyer , setBuyer ] = useState(false)
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer")
      if(isbuyer) setBuyer(true)
      console.log("/");
    }
  }, [runOnce]);

  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <>
      {
        buyer &&
        <Head>
        <title>Home | WorthEats</title>
        </Head>
      }


      {/* Navbar */}
      {
        buyer &&
       <CustomerNavBar />
      }
      {
        buyer &&
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 8,
                }}
              >
                <Container maxWidth={false} style={{ paddingLeft: 70, paddingRight: 70 }}>
                  {/* <Typography color="textPrimary" variant="h2">
                    Welcome to customer page!
                  </Typography> */}
                  {/* Searchbar Component */}
                  {/* <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      justifyContent: "center",
                      //flexDirection: "column",
                      padding: 20,
                    }}
                  >
                    <SearchBar />
                    <div style={{ padding: 3, width: 1000 }}>
                      <div
                        className="text"
                        style={{
                          padding: 5,
                          justifyContent: "normal",
                          fontSize: 20,
                          color: "blue",
                          margin: 1,
                          width: "100%",
                          BorderColor: "green",
                          borderWidth: "100%",
                        }}
                      ></div>
                    </div>
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      padding: 20,
                    }}
                  >
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <div style={{ padding: 3 }}>
                      {dataFiltered.map((d) => (
                        <div
                          className="text"
                          style={{
                            padding: 5,
                            justifyContent: "normal",
                            fontSize: 20,
                            color: "blue",
                            margin: 1,
                            width: "250px",
                            BorderColor: "green",
                            borderWidth: "10px",
                          }}
                          key={d.id}
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* End of Searchbar Component */}
                  <br></br>

                  {/* Restaurants Category Component */}
                  {/* <Typography color="textPrimary" variant="h2">
                    Restaurants
                  </Typography> */}
                  <Mcd />

                  {/* Category */}
                  <Grid container spacing={10}>
                    <Grid item lg={10} sm={6} xl={10} xs={12}>
                      <br></br>
                      {/* <RestCategory /> */}
                    </Grid>
                  </Grid>
                  {/* End of Restaurants Category Component */}
                  <br></br>
                  <br></br>

                  {/* Best Sellers Component */}
                  <Typography color="textPrimary" variant="h2">
                    Best Sellers
                  </Typography>

                  <br></br>

                  {/* Best Sellers */}
                  <Grid container spacing={2}>
                    {/* <Grid item> */}
                    {/* <BestSellers /> */}
                    {/* </Grid> */}
                  </Grid>
                  {/* End of Best Sellers Component */}
                </Container>
              </Box>
      }
    </>
  );
};

Home.getLayout = (home) => (
  <>
    <SecuredBuy />
    {home}
  </>
);

export default Home;
