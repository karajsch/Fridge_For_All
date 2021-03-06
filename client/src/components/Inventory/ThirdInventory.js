import React, { useState, useEffect } from "react";
import "./../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../utils/API";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import uuid from "uuid";

const Inventory = ({ keyword }) => {
  //need item name, quantity
  // const [items, setItems] = useState([
  //   { id: uuid(), itemName: "Kale 🥬 ", quantity: 1, isSelected: false },
  //   { id: uuid(), itemName: "Bread 🍞", quantity: 8, isSelected: false },
  //   { id: uuid(), itemName: "Tomato 🍅", quantity: 12, isSelected: false },
  //   { id: uuid(), itemName: "Pasta Sauce 🥫", quantity: 5, isSelected: false },
  //   { id: uuid(), itemName: "Carrots 🥕", quantity: 4, isSelected: false },
  //   { id: uuid(), itemName: "Peanut Butter 🥜", quantity: 2, isSelected: false },
  //   { id: uuid(), itemName: "Jelly 🍓", quantity: 2, isSelected: false },
  //   { id: uuid(), itemName: "Instant Ramen 🥣", quantity: 24, isSelected: false },
  //   { id: uuid(), itemName: "Eggs 🥚", quantity: 12, isSelected: false },
  // ]);

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  //Code below added 02/18
  // function InventoryData() {
  //   // Setting our component's initial state
  //   const [inventoryData, setInventoryData] = useState([])
  //   const [formObject, setFormObject] = useState({})

  //   // Load all items and store them with setInventoryData
  useEffect(() => {
    loadInventoryData();
  }, []);

  // Loads all items and sets them to inventory
  function loadInventoryData() {
    API.getInventoryData()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }
  //End of code added 02/18

  //sorting variables
  const [sortQuantity, setSortType] = useState("quantity");
  const [data, setData] = useState([]);

  //When button is clicked a new item will be created with unique id from uuid,
  //default quantity of 1, and the name as the input value.
  const handleAddButtonClick = () => {
    const newItem = {
      name: inputValue,
      quantity: 1,
      isSelected: false,
    };

    API.saveItem(newItem)
    .then (res => {
      const newItems = [...items, newItem];
      setItems(newItems);
      setInputValue("");
    

    }).catch(err => console.log(err))

   
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    console.log(newItems);
    console.log(index);
    let itemToUpdate = newItems.find(({ _id }) => _id === index);
    
    itemToUpdate.quantity++;
    // newItems[index].quantity++;
   
    console.log(itemToUpdate);
    API.updateItem(itemToUpdate)
      .then((res) => {
        console.log(res);
        setItems([...items, itemToUpdate])
      
        sortArray(sortQuantity);
      })
      .catch((err) => console.log(err));
    //when the arrows are pushed, the quantity sorts in real time
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    console.log(newItems);
    console.log(index);
    let itemToUpdate = newItems.find(({ _id }) => _id === index);
    
    itemToUpdate.quantity--;
    // newItems[index].quantity++;
   
    console.log(itemToUpdate);
    API.updateItem(itemToUpdate)
      .then((res) => {
        console.log(res);
        setItems([...items, itemToUpdate])
      
        sortArray(sortQuantity);
      })
      .catch((err) => console.log(err));
  };

  const toggleDelete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    //clear the item from the array
    newItems.splice(index, 1);
    setItems(newItems);
  };

  //sorting logic
  const sortArray = (quantity) => {
    const quantities = {
      quantities: "quantity",
    };
    const sortProperty = quantities[quantity];
    //sort by lowest quantity first
    const sorted = [...items].sort((a, b) => a["quantity"] - b["quantity"]);
    console.log({ sorted });
    setItems(sorted);
  };

  //sorting function
  useEffect(() => {
    sortArray(sortQuantity);
  }, []);

  //when the qty drops below 5, it turns red
  //quantities between 6-10 are grey
  //quantities 11+ are blue
  const qtyColor = (quantity) => {
    if (quantity < 6) return urgent;
    else if (quantity > 10) return surplus;
    else return good;
  };
  const urgent = {
    color: "#FFEBCD",
    backgroundColor: "#FF6347",
  };
  const good = {
    color: "#483D8B",
    backgroundColor: "#D8BFD8",
  };
  const surplus = {
    color: "#4682B4",
    backgroundColor: "#B0E0E6",
  };

  return (
    <>
      <div className="add-item-box">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="add-item-input"
          placeholder="Add something to the fridge..."
        />
        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
      </div>
      <div className="item-list">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((item, index) => (
            <div
              className="item-container rounded"
              style={qtyColor(item.quantity)}
            >
              <div
                className="item-name ml-1"
                onClick={() => toggleDelete(index)}
              >
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="deleted">{item.name}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.name}</span>
                  </>
                )}
              </div>

              <div className="quantity mr-2">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleQuantityDecrease(item._id)}
                  />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQuantityIncrease(item._id)}
                  />
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Inventory;
