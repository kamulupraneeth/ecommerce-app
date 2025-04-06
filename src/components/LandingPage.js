import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  setCategoryFilter,
} from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import "./Product.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, []);

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  const handleClearFilter = () => {
    dispatch(setCategoryFilter(""));
  };

  let filteredProducts = products.filter((product) => {
    return selectedCategory ? product.category === selectedCategory : true;
  });

  filteredProducts = Object.groupBy(filteredProducts, (product) => {
    return product.category;
  });

  return !products.length ? (
    <h1 className="products__empty">Network is not available</h1>
  ) : (
    <div>
      <select
        name=""
        id=""
        onChange={handleCategoryChange}
        value={selectedCategory}
        className="select-section"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleClearFilter} className="clear__filter">
        Clear Filter
      </button>

      <div className="product-list">
        {Object.keys(filteredProducts).map((category) => {
          const productsInCategory = filteredProducts[category];
          return (
            <div key={category} className="category-products-list">
              <h2>{category}</h2>
              <div className="category-products">
                {productsInCategory.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
