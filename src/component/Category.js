import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Category = ({ categories }) => {
  return (
    <div>
      <ListGroup className="padding-20px">
        {categories.map((category) => (
          <ListGroupItem 
            key={category.id} >
            {category.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Category;
