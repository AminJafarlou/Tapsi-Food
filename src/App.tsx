import { ChangeEventHandler, useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [newProductName, setNewProductName] = useState<string>("");
  const [listOfItems, setListOfItems] = useState<Array<string>>([
    "Product Name 1",
    "Product Name 2",
    "Product Name 3",
    "Product Name 4",
    "Product Name 5",
    "Product Name 6",
    "Product Name 7",
    "Product Name 8",
    "Product Name 9",
  ]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewProductName(e.target.value);
  };

  const handleAddToList = () => {
    setListOfItems(prev => [...prev, newProductName])
    setNewProductName('')
  }

  return (
    <div className="App">
      <div className="list-wrapper">
        <div className="list-header">Shopping List {newProductName}</div>

        <div className="products-list">
          {listOfItems.map((item) => {
            return <ListItem title={item} />;
          })}
        </div>

        <div className="list-actions">
          <input
            type="text"
            value={newProductName}
            onChange={handleOnChange}
            className="new-product-input"
          />
          <button className="add-button" onClick={handleAddToList}>
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
