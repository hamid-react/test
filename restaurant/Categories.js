import React, { useState } from "react";

const Categories = ({ categories, filtermenus }) => {
    const [mainCategory, setMainCategory] = useState("All");
    return (
        <div className="btn-container">
            {categories.map((category, index) => (
                <button
                    key={index}
                    type="button"
                    className={category === mainCategory ? "filter-btn highlight" : "filter-btn"}
                    onClick={() => (setMainCategory(category), filtermenus(category))}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
