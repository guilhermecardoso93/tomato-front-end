import './styles.css';

export const FoodItem = ({id, name, price, description, image}) => {

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img src={image} alt='' className='food-item-image'/>
      </div>
    </div>
  )
}