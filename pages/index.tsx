import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './component/Header'
import Banner from './component/Banner'
import requests from './utlis/request'
import { Movie } from '../typings'
import Row from './component/Row'
import useAuth from '../hooks/useAuth'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import { modalState, movieState } from '../atoms/modalAtom'
import Modal from './component/Modal'


interface Props{
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
  
}

const Home = ({ netflixOriginals,
                actionMovies,
                comedyMovies,
                documentaries,
                horrorMovies,
                romanceMovies,
                topRated,
                trendingNow, 
              }: Props) => {
  
  const {logout,loading} = useAuth();
  
  const showModal = useRecoilValue(modalState)
  //const [showModal, setShowModal] = useState(false);


  if (loading) return null

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
          <Header></Header>
          
        <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
          <Banner netflixOriginals={netflixOriginals} ></Banner>
            <section className='md:space-y-24'>
            <Row title='Trending Now' movies={trendingNow}></Row>
            <Row title='Action Thrillers' movies={actionMovies}></Row>
            <Row title='Top Rated' movies={topRated}></Row>
            {/* My lsit */} 
            <Row title='Comedies' movies={comedyMovies}></Row>
            <Row title='Scary Movies' movies={horrorMovies}></Row>
            <Row title='Romance Movies' movies={romanceMovies}></Row>
            <Row title='Documentaries' movies={documentaries}></Row>
            </section>
        {/* Modal */}
        </main>
        {showModal && <Modal/>}
    </div>
  )
}

export default Home


export const getServerSideProps = async () =>{
    


  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return{
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }

 
}

