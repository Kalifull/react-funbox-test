import cn from 'classnames';
import { useState } from 'react';

import catLogo from '../../assets/images/cat.png';

const ProductCard = ({ title, name, type, portion, bonus, weight, description, isDisabled }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!isDisabled) {
      setIsSelected((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (isSelected) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const productItemCn = cn({
    'theme-select': isSelected && !isDisabled,
    'theme-select--disabled': isDisabled,
  });

  const itemDescriptionCn = cn({
    'product-item__description': !isDisabled,
    'product-item__description--disabled': isDisabled,
  });

  const textTopCn = cn('text__top', {
    'text__top--hovered': isHovered && !isDisabled && isSelected,
  });

  return (
    <div className="product-item">
      <div
        className={`product-item__article article ${productItemCn}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="article__top-wrapper text">
          <p className={textTopCn}>{isHovered && isSelected ? 'Котэ не одобряет?' : title}</p>
          <h2 className="text__header">{name}</h2>
          <p className="text__header-after">{type}</p>
          <div className="text-features">
            <p className="text-features__bottom">
              <strong>{portion.split(' ')[0]}</strong>
              {` ${portion.split(' ')[1]}`}
            </p>
            <p className="text-features__bottom"> {bonus}</p>
            {isDisabled && <p className="text-features__bottom">заказчик доволен</p>}
          </div>
          <div className="bottom-text">
            <p className="bottom-text__number">{weight}</p>
            <p className="bottom-text__text">кг</p>
          </div>
          <div className="product-item__img">
            <img className="product-item__image" src={catLogo} alt={name} />
          </div>
        </div>
      </div>
      <div className={itemDescriptionCn}>
        {isDisabled ? (
          <p>Печалька, {type} закончился.</p>
        ) : (
          <p>
            {isSelected ? (
              description
            ) : (
              <>
                <span>Чего сидишь? Порадуй котэ </span>
                <button type="button" className="product-item__link" onClick={handleClick}>
                  купи.
                </button>
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
