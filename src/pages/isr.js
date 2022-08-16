import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

export default function ISR({ time }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={(styles.title, styles.time)}>{time}</h1>
        <h1>
          <Link href="/">
            <a>Home 로</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
