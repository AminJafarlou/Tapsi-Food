import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler, useState } from "react";
import "./App.css";
import { ListItem } from "./components/ListItem";

interface ProductItem {
  id: string;
  price: number;
  title: string;
  description: string;
  strikePrice: number;
  base64Image: string;
}

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["productList"],
    queryFn: () =>
      fetch("https://shopping-list-ten-kohl.vercel.app/products.json").then(
        (res) => res.json()
      ),
  });

  const [newProductName, setNewProductName] = useState<string>("");
  const [listOfItems, setListOfItems] = useState<Array<ProductItem>>(
    data?.products || []
  );

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewProductName(e.target.value);
  };

  const handleAddToList = () => {
    // @ts-ignore
    setListOfItems((prev) => [...prev, newProductName]);
    setNewProductName("");
  };

  return (
    <div className="App">
      <div className="list-wrapper">
        <div className="list-header">Shopping List {newProductName}</div>

        {isPending ? (
          <div className="products-list">Loading ...</div>
        ) : error ? (
          <div className="products-list">Error</div>
        ) : (
          <div className="products-list">
            {(data?.products || []).map((item: ProductItem) => {
              return <ListItem key={item.id} title={item.title} />;
            })}
          </div>
        )}

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
