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
import { Pasta } from "../../../components/customer_view/restaurant/pasta";
import { SearchBar } from "../../../components/customer_view/searchbar";

const pasta = [
  {
    id: 1,
    name: "Chicken Alfredo",
    image: "/static/images/customer_view/cartlist/pasta/alfredo.jpg",
    description: "Simple chicken alfredo pasta without the chicken.",
    restaurant: "Pastamania",
    price: 5.9,
  },
  {
    id: 2,
    name: "Carbonara Pasta",
    image: "/static/images/customer_view/cartlist/pasta/carbonara.jpg",
    description: "Carbonara pasta without the bacon bits, bacon bits are replaced with mushrooms",
    restaurant: "Pastamania",
    price: 7.0,
  },
  {
    id: 3,
    name: "Tomato Pasta",
    image: "/static/images/customer_view/cartlist/pasta/tomato.jpg",
    description: "Tomato penne pasta replaced with spaghetti with the other toppings in tact",
    restaurant: "Pastamania",
    price: 6.7,
  },
];

const PastaOrder = () => {
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
  const [filteredPasta, setFilteredPasta] = useState(pasta);

  useEffect(() => {
    const filteredData = pasta.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPasta(filteredData);
  }, [searchQuery, pasta]);

  // Cart functionality
  const handleAddToCart = (item) => {
    // add item to cart logic here
  };

  return (
    <>
      {buyer && (
        <Head>
          <title>Pastamania | WorthEats</title>
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
            <Pasta />
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
              {filteredPasta.map((item) => (
                <Grid item key={item.id}>
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

PastaOrder.getLayout = (pasta) => (
  <>
    <SecuredBuy />
    {pasta}
  </>
);

export default PastaOrder;
