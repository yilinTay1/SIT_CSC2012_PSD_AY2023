import Head from "next/head";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { SecuredBuy } from "../../components/firebase/SecuredBuy";
import NextLink from "next/link";
import StarRateIcon from "@mui/icons-material/StarRate";
// Import other components
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import { SearchBar } from "../../components/customer_view/searchbar";
import { RestCategory } from "../../components/customer_view/home/restCategory";

// Search bar resource: https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he
const featured = [
  {
    id: 1,
    name: "Crazy Croissant",
    image: "/static/images/customer_view/restaurant/crazycross.jpg",
    timeaway: "10 min away",
    rating: 4.5,
    link: "/customer/order/crazycroissant",
  },
  {
    id: 2,
    name: "Mcdonalds",
    image: "/static/images/customer_view/restaurant/mcd.jpg",
    timeaway: "15 min away",
    rating: 4.3,
    link: "/customer/order/mcdonalds",
  },
  {
    id: 3,
    name: "Sushi Express",
    image: "/static/images/customer_view/restaurant/sushiexpress.png",
    timeaway: "20 min away",
    rating: 4.0,
    link: "/customer/order/sushiexpress",
  },
];

const Home = () => {
  const runOnce = useRef(true);
  const [buyer, setBuyer] = useState(false);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      if (isbuyer) setBuyer(true);
      console.log("/");
    }
  }, [runOnce]);

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFeatured, setFilteredFeatured] = useState(featured);

  useEffect(() => {
    const filteredData = featured.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFeatured(filteredData);
  }, [searchQuery, featured]);

  return (
    <>
      {buyer && (
        <Head>
          <title>Home | WorthEats</title>
        </Head>
      )}
      {/* Navbar */}
      {buyer && <CustomerNavBar />}
      {buyer && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false} style={{ paddingLeft: 70, paddingRight: 70 }}>
            {/* <div
              style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: 20,
              }}
            > */}
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {/* <div style={{ padding: 3 }}>
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
            </div> */}
            {/* End of Searchbar Component */}
            <br></br>

            {/* Restaurants Category Component */}
            <Typography color="textPrimary" variant="h2">
              Restaurants
            </Typography>

            {/* Category */}
            <Grid container spacing={10}>
              <Grid item lg={10} sm={6} xl={10} xs={12}>
                <br></br>
                <RestCategory />
              </Grid>
            </Grid>
            {/* End of Restaurants Category Component */}
            <br></br>
            {/* Featured Component */}
            <Typography color="textPrimary" variant="h2">
              Featured Restaurants
            </Typography>

            <br></br>

            {/* Best Sellers */}
            <Grid container spacing={2}>
              {filteredFeatured.map((item) => (
                <Grid item key={item.id}>
                  <Card sx={{ maxWidth: 550 }}>
                    <NextLink
                      href={item.link}
                      style={{ cursor: "pointer", color: "black", textDecoration: "None" }}
                    >
                      <Link
                        to={item.link}
                        // variant="subtitle2"
                        underline="hover"
                        sx={{
                          cursor: "pointer",
                          color: "black",
                        }}
                      >
                        <CardMedia sx={{ height: 180 }} image={item.image} title={item.name} />
                        <CardContent sx={{ width: 550 }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.timeaway}
                          </Typography>

                          <Typography
                            variant="h6"
                            color="text.secondary"
                            style={{ float: "right" }}
                          >
                            <StarRateIcon fontSize="medium" /> {item.rating.toFixed(1)}
                          </Typography>
                        </CardContent>
                      </Link>
                    </NextLink>
                  </Card>
                </Grid>
              ))}
              {/* <Grid item> */}
              {/* <BestSellers /> */}
              {/* </Grid> */}
            </Grid>
            {/* End of Featured Component */}
          </Container>
        </Box>
      )}
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
