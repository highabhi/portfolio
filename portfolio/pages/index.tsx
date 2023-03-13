import styles from "../styles/Home.module.css";
import HomePage from "../Components/homepage";
import Projects from "../Components/projects";
import Contact from "../Components/contact";


export default function Home() {
  return (
    <>
      <HomePage />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}
