import React from "react";
import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Index = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Total Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Total Ninjas</h1>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
