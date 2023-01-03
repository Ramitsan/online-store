import React from "react";
import { IProductData, ICardStyle, IProductItem } from "../../interfaces";
import { CardList } from "./cards-list";

type CardsWrapProps = {
  products: Array<IProductItem>;
  style: ICardStyle;
  activeItems: IProductData[];
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
};

export function CardsWrap({ products, style, onAddCartItem, onRemoveCartItem, activeItems }: CardsWrapProps) {
  return (
    <div className="cards-block__cards-wrap">
      {!products.length ? <h2>No products found</h2> : <CardList style={style} 
        products={products} 
        activeItems={activeItems}
        onAddCartItem={(productItem) => {onAddCartItem(productItem)}}
        onRemoveCartItem={(productItem) => {onRemoveCartItem(productItem)}}
        /> }
    </div>
  );
}
