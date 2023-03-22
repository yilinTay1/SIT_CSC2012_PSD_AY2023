import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";

// Recommendation component
export function FoodRecommend() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const id = sessionStorage.getItem('uid');
        console.log(id);
        const apiLink = `http://localhost:5000/api/getRecommend/${id}`;
        const res = await fetch(apiLink);
        const jsonData = await res.json();
        setData(jsonData);
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {data ? (
          <div>
              <Grid container spacing={2}>
                {data["recommendations"].slice(0, 6).map((item) => (
                  <Grid item key={item.id}>
                    <Card sx={{ maxWidth: 550 }}>
                      <Link
                        to={item.link}
                        // variant="subtitle2"
                        underline="hover"
                        sx={{
                          cursor: "pointer",
                          color: "black",
                        }}
                      >
                        <CardMedia
                          sx={{ height: 180 }}
                          image="https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=w_1601,h_900,x_0,y_0,c_fill"
                          title={item.name}
                        />
                        <CardContent sx={{ width: 550, height: 160 }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.item.split(",")[0]}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.item.split(",")[1]}
                          </Typography>
  
                          <Typography variant="h6" color="text.secondary" style={{ float: "right" }}>
                            ${item.item.split(",")[2]}0
                          </Typography>
                        </CardContent>
                      </Link>
                    </Card>
                  </Grid>
                ))}
              </Grid>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }