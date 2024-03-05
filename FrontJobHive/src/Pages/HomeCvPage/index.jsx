import React from 'react'
import CvCategoriesSection from '../../Components/HomeCvPageSections/CvCategoriesSection'
import AllCvSection from '../../Components/HomeCvPageSections/AllCvSection'
import { Helmet } from 'react-helmet-async'

const HomeCvPage = () => {
  return (
   <>
   <Helmet>
    <title>Home CV</title>
   </Helmet>
   <main>
        <CvCategoriesSection/>
        <AllCvSection/>
    </main>
   </>
  )
}

export default HomeCvPage