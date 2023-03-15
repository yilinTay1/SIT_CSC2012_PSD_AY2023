import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { SecuredBuy } from "../../../components/firebase/SecuredBuy";

// Import other components
import CustomerNavBar from "../../../components/customer_view/navigation/navbar";
import { Sushi } from "../../../components/customer_view/restaurant/sushi";
import { SearchBar } from "../../../components/customer_view/searchbar";

const sushi = [
  {
    id: 1,
    name: "California Roll",
    image: "/static/images/customer_view/cartlist/sushi/cali.jpg",
    description: "All time favourite california roll without crabstick",
    restaurant: "Sushi Express",
    price: 7.8,
  },
  {
    id: 2,
    name: "Handroll Sushi",
    image: "/static/images/customer_view/cartlist/sushi/handroll.jpg",
    description: "Our signature handroll sushi without tuna",
    restaurant: "Sushi Express",
    price: 6.5,
  },
  {
    id: 3,
    name: "Maki Sushi",
    image: "/static/images/customer_view/cartlist/sushi/maki.jpg",
    description: "Maki maki! One of our most popular sushi but without avocado",
    restaurant: "Sushi Express",
    price: 6.9,
  },
];

const SushiOrder = () => {
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
  const [filteredSushi, setFilteredSushi] = useState(sushi);

  useEffect(() => {
    const filteredData = sushi.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSushi(filteredData);
  }, [searchQuery, sushi]);

  // Cart functionality
  const handleAddToCart = (item) => {
    // add item to cart logic here
  };

  return (
    <>
      {buyer && (
        <Head>
          <title>Sushi Express | WorthEats</title>
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
            <Sushi />
            <br></br>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Category */}
            <Grid container spacing={10}>
              <Grid item lg={10} sm={6} xl={10} xs={12}>
                <br></br>
                {/* <RestCategory /> */}
              </Grid>
            </Grid>
            {/* End of Restaurants Category Component */}
            <br></br>

            {/* Best Sellers */}
            <Grid container spacing={2}>
              {filteredSushi.map((item) => (
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 200 }} image={item.image} title={item.name} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" id="productName" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" id="productPrice">
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        onClick={() =>
                          handleAddToCart({ id: item.id, name: item.name, price: item.price })
                        }
                      >
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* End of Best Sellers Component */}
          </Container>
        </Box>
      )}
    </>
  );
};

SushiOrder.getLayout = (sushi) => (
  <>
    <SecuredBuy />
    {sushi}
  </>
);

export default SushiOrder;
