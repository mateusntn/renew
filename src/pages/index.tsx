import { CompletedChallanges } from "../components/CompletedChallenges"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Renew</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallanges />
        </div>
        <div>

        </div>
      </section>
    </div>  
  );
};
