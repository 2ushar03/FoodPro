import React, { useState } from "react";
import "./foods.css";
import "./home.css"

const Products = ({ productItems, handleAddProduct }) => {
    const [search, setSearch] = useState("");
    const [searchVisible, setSearchVisible] = useState(false);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const toggleSearchVisibility = () => {
        setSearchVisible(!searchVisible);
    };

    const filteredProductItems = productItems.filter((productItem) =>
        productItem.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="foodstore">
            {searchVisible && (
                <input
                    className="search"
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearchChange}
                />
            )}

            <button className="search" onClick={toggleSearchVisibility}>
                {searchVisible ? "Hide" : "Search"}
            </button>

            {filteredProductItems.map((productItem) => (
                <div key={productItem.id} className="card">
                    <div className="prodimage">
                        <img src={productItem.image} alt={productItem.title} width={303} height={286} />
                    </div>
                    <div className="content">
                        <h1>{productItem.title}</h1>
                        <div><h3>{productItem.price}</h3></div>
                        <div><p>{productItem.info}</p></div>
                        <div><button className="addbtn" onClick={() => handleAddProduct(productItem)}>Add to Cart</button></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;