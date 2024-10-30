import { menu_list } from '../../assets/menu'
import "./styles.css";

export const ExplorerMenu = () => {
  return (
    <div className="explorer-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of plates.
      </p>
      <div className="explore-menu-list">
        {
          menu_list.map((item, index ) => {
            return (
              <div className="explore-menu-list-item">

              </div>
            )
          })
        }
      </div>
    </div>
  );
};
