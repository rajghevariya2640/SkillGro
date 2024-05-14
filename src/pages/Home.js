import React from 'react'
import Banner from '../presentation/home/Banner'
import Feature from '../presentation/home/Feature'
import MoreAboutUs from '../presentation/home/MoreAboutUs'
import BestCourse from '../presentation/home/BestCourse'
import WorkShop from '../presentation/home/WorkShop'
import CounterCourse from '../presentation/home/CounterCourse'
import Introduce from '../presentation/home/Introduce'
import Subscribe from '../presentation/home/Subscribe'
import SGCard from '../shared/SGCard'
import UpcomingEvent from '../presentation/home/UpcomingEvent'
import NewsBlog from '../presentation/home/NewsBlog'

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <MoreAboutUs />
      <BestCourse />
      <WorkShop />
      <CounterCourse />
      <Introduce />
      <Subscribe />
      <UpcomingEvent />
      <NewsBlog />
    </>
  )
}

export default Home
