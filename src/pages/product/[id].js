import { useRouter } from "next/router";

const Details = ({ product }) => {
  return <h1>details</h1>;
};
export default Details;
export async function getServerSideProps(context) {
  const {
    query: { id },
  } = context;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await response.json();
  return {
    props: {
      product,
    },
  };
}
