import { useState } from "react";
import { ExplorerMenu } from "../../components/ExplorerMenu";
import { Header } from "../../components/Header";
import "./styles.css";
import { FoodDisplay } from "../../components/FoodDisplay/Index";
import { AppDownload } from "../../components/AppDownload";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExplorerMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};
