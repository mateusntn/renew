import Head from "next/head";
import styles from '../styles/pages/Home.module.css'


import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { CompletedChallanges } from "../components/CompletedChallenges"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";


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
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>  
  );
};
