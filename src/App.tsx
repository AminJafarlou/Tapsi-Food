import DeleteIcon from "@mui/icons-material/Delete";
import { ChangeEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { ProductItem, products } from "./assets/products";
import { ListItem } from "./components/ListItem";

function App() {
  const [newProductName, setNewProductName] = useState<string>("");
  const [listOfItems, setListOfItems] = useState<Array<ProductItem>>(products);
  const [readyToDeleteIds, setReadyToDeleteIds] = useState<Array<string>>([]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewProductName(e.target.value);
  };

  const handleAddToList = () => {
    setListOfItems((prev) => [
      ...prev,
      { id: uuidv4(), title: newProductName },
    ]);
    setNewProductName("");
  };

  const toggleItemInDeleteList = (id: string) => {
    if (!readyToDeleteIds.includes(id)) {
      setReadyToDeleteIds((prev) => [...prev, id])
    } else {
      const newList = readyToDeleteIds.filter(itemId => itemId !== id)
      setReadyToDeleteIds(newList)
    }
  }

  const handleDelete = () => {
    const newList = listOfItems.filter(item => !readyToDeleteIds.includes(item.id))
    setListOfItems(newList)
    setReadyToDeleteIds([])
  };

  return (
    <div className="App">
      <div className="list-wrapper">
        <div className="list-header">
          <div className="header-left" />
          <div className="header-title">Shopping List</div>
          <div className="header-icon">
            <DeleteIcon onClick={handleDelete} />
          </div>
        </div>

        <div className="products-list">
          {listOfItems.map((item: ProductItem) => {
            return (
              <ListItem
                id={item.id}
                key={item.id}
                title={item.title}
                handleOnChange={toggleItemInDeleteList}
                isSelected={readyToDeleteIds.includes(item.id)}
              />
            );
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
