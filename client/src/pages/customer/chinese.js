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

const chinese = [
  {
    id: 1,
    name: "Jia Jia Wanton",
    image: "/static/images/customer_view/restaurant/wanton.jpg",
    timeaway: "25 min away",
    rating: 4.5,
    link: "/customer/order/jiajiawanton",
  },
  {
    id: 2,
    name: "Din Tai Fung",
    image: "/static/images/customer_view/restaurant/dintaifung.jpg",
    timeaway: "20 min away",
    rating: 3.9,
    link: "/customer/order/dintaifung",
  },
];

const Chinese = () => {
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
  const [filteredChinese, setFilteredChinese] = useState(chinese);

  useEffect(() => {
    const filteredData = chinese.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredChinese(filteredData);
  }, [searchQuery, chinese]);

  return (
    <>
      {buyer && (
        <Head>
          <title>Chinese | WorthEats</title>
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
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
            <br></br>

            {/* Chinese Component */}
            <Typography color="textPrimary" variant="h2">
              Chinese Restaurants
            </Typography>

            <br></br>

            {/* Chinese Restaurants */}
            <Grid container spacing={2}>
              {filteredChinese.map((item) => (
                <Grid item key={item.id}>
                  <Card sx={{ maxWidth: 550 }}>
                    <NextLink href={item.link}>
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
            </Grid>
            {/* End of Chinese Component */}
          </Container>
        </Box>
      )}
    </>
  );
};

Chinese.getLayout = (chinese) => (
  <>
    <SecuredBuy />
    {chinese}
  </>
);

export default Chinese;
