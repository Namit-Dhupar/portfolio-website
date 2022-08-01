import Head from 'next/head'
import {
  AboutQuery, ContactQuery, ExperienceQuery, ExtractData, MainQuery,
  MediaQuery, ProjectQuery, SkillQuery, client
} from '../js/utils';
import About from './components/About'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects/ProjectsContainer'
import Skills from './components/Skills/SkillsContainer'
import Experience from './components/Experience/ExperienceContainer';
import Navbar from './components/Navbar';

export async function getStaticProps() {

  const main = await client.query({
    query: MainQuery
  });

  const about = await client.query({
    query: AboutQuery
  });

  const skills = await client.query({
    query: SkillQuery
  });

  const contact = await client.query({
    query: ContactQuery
  });

  const media = await client.query({
    query: MediaQuery
  });

  const experience = await client.query({
    query: ExperienceQuery
  });

  const project = await client.query({
    query: ProjectQuery
  });

  return {
    props: {
      mainData: ExtractData(main?.data?.pages || []),
      aboutData: ExtractData(about?.data?.pages || []),
      skillData: ExtractData(skills?.data?.posts || []),
      contactData: ExtractData(contact?.data?.posts || []),
      mediaData: ExtractData(media?.data?.mediaItems || []),
      experienceData: ExtractData(experience?.data?.posts || []),
      projectData: ExtractData(project?.data?.posts || [])
    },
    revalidate: 10
  }
}

export default function Home({ mainData, aboutData, skillData,
  contactData, mediaData, experienceData, projectData }) {

  const name = mainData?.[0]?.main?.name;
  const designation = mainData?.[0]?.main?.designation;
  const tagline = mainData?.[0]?.main?.tagline;
  const resumeData = mediaData.find(item => item?.mediaItemUrl.toUpperCase().indexOf('RESUME') > -1
    && item?.mediaType === 'file');
  const logoData = mediaData.find(item => item?.title.toUpperCase() === 'LOGO');

  return (
    <div>
      <Head>
        <title>{name} | {designation}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={logoData?.mediaItemUrl} />
      </Head>
      <Navbar contactInfo={contactData}
        logo={logoData}
        tagline={tagline} />
      <Main items={mainData} contactInfo={contactData} />
      <About items={aboutData} downloadResume={resumeData?.mediaItemUrl} />
      <Skills data={skillData} />
      <Experience data={experienceData} />
      <Projects projectInfo={projectData} />
      <Contact name={name} designation={designation} contactInfo={contactData} />
    </div>
  )
}
