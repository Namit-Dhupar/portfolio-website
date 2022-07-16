import Head from 'next/head'
import About from './components/About'
import Contact from './components/Contact'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/Projects/ProjectsContainer'
import Skills from './components/Skills/SkillsContainer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Namit | Front end Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
