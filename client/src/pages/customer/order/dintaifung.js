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
import { Dtf } from "../../../components/customer_view/restaurant/dtf";
import { SearchBar } from "../../../components/customer_view/searchbar";
// import { McdCart } from "../../../components/customer_view/restaurant/addtocart/mcdcart";
const dtf = [
  {
    id: 1,
    name: "Fried Rice",
    image: "/static/images/customer_view/cartlist/dtf/friedrice.jpg",
    description: "Our signature chicken fried rice loved by all, but without the chicken.",
    restaurant: "Din Tai Fung",
    price: 4.5,
  },
  {
    id: 2,
    name: "Spicy Lamian",
    image: "/static/images/customer_view/cartlist/dtf/lamian.jpg",
    description:
      "All time favourite spicy lamian but without the dumplings.",
    restaurant: "Din Tai Fung",
    price: 4.0,
  },
  {
    id: 3,
    name: "Xiao Long Bao",
    image: "/static/images/customer_view/cartlist/dtf/xlb.jpg",
    description:
      "Restuarant's most famous xiao long bao but replaced with chicken meat and stock",
    restaurant: "Din Tai Fung",
    price: 6.5,
  },
];

const DtfOrder = () => {
  const runOnce = useRef(true);
  const [buyer, setBuyer] = useState(false);
  // const [pancake, setPancake] = useState(false)
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      if (isbuyer) setBuyer(true);
      console.log("/");
    }
  }, [runOnce]);

  // function addToCartPancake() {
  //   handleAddToCart({id: 'MCDP3', name: 'Pancake'})
  //   setPancake(true)
  // }
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDtf, setFilteredDtf] = useState(dtf);

  useEffect(() => {
    const filteredData = dtf.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDtf(filteredData);
  }, [searchQuery, dtf]);

  const handleAddToCart = (item) => {
    // add item to cart logic here
  };

  return (
    <>
      {buyer && (
        <Head>
          <title>Din Tai Fung | WorthEats</title>
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
            <Dtf />
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
              {filteredDtf.map((item) => (
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

DtfOrder.getLayout = (dtf) => (
  <>
    <SecuredBuy />
    {dtf}
  </>
);

export default DtfOrder;