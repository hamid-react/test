import React, { useState } from "react";
import './Restaurant.css'
import menus from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ['All' , ...new Set(menus.map(data => data.category))]

export default function Restaurant() {
    
    const [allMenus, setAllMenus] = useState(menus);
    const [categories, setCategories] = useState(allCategories);

  const filtermenus = (category) => {
    if(category === "All") {
        setAllMenus(menus)
        return
    }
    let filteredMenu = menus.filter(menu => menu.category === category)
    setAllMenus(filteredMenu)     
  }
 

    return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filtermenus={filtermenus} /> 
      <Menu allMenus={allMenus} />
    </section>
  </main>
}
