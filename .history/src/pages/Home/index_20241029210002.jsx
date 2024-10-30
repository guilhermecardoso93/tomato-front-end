import { useState } from "react";
import { ExplorerMenu } from "../../components/ExplorerMenu";
import { Header } from "../../components/Header";
import "./styles.css";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExplorerMenu category={category} setCategory={setCategory}/>
    </div>
  );
};
