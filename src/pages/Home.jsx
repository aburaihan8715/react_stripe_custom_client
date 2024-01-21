import Cart from "../components/Cart";
import Product from "../components/Product";

const Home = () => {
  return (
    <main className="space-y-6 mt-5">
      <section>
        <h1 className="text-2xl font-medium capitalize mb-5">E-commerce Card System</h1>
        <div className="grid grid-cols-3 gap-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>

      <section>
        <Cart />
      </section>
    </main>
  );
};

export default Home;
