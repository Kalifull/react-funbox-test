import { useFetchProductsQuery } from '../api/productsApi';

import ProductCart from './ProductCart';
import Loader from './Loader';

const App = () => {
  const { data: products, isLoading } = useFetchProductsQuery();

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title"> {products && 'Ты сегодня покормил кота?'}</h1>
      </header>
      <main className="products-container">
        {isLoading && <Loader />}
        {products && products.map((product) => <ProductCart key={product.id} {...product} />)}
      </main>
    </div>
  );
};

export default App;
