import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import PizzaList from "../components/PizzaList";

export default function Home({pizzaList}) {
  return (
    <div>
      <Head>
        <title>Redux Food Order</title>
        <meta name="description" content="Project for testing redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
