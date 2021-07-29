import React  from "react"; //rafce
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Products = ({ product, addtocart }) => {
  const classes = useStyles();
  return (
    <div className="d-flex">
      {product.map((prd) => {
        return (
          <div className="App"  key={prd.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={prd.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {prd.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    {prd.info}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button  
                onClick={() => addtocart(prd)}
                 variant="outlined" color="primary">
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
