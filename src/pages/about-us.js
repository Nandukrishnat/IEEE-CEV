import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../layouts/MainLayout'

function AboutUs() {
  return (
    <Layout>
      <div className="banner"> About Us</div>
      <div className="container my-5">
        <div className="d-flex flex-md-nowrap flex-wrap align-items-center my-5">
          <p className="flex-half p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum officiis odio aspernatur, officia accusantium repellendus hic modi aliquid voluptatibus quia dolore laboriosam temporibus dolorum in vel fuga tenetur. Nam.</p>
          <StaticImage className="flex-half rounded-xl" src="../images/Hero.jpg" alt=""/>
        </div>
        <div className="d-flex flex-md-nowrap flex-wrap flex-row-reverse align-items-center my-5">
          <p className="flex-half p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum officiis odio aspernatur, officia accusantium repellendus hic modi aliquid voluptatibus quia dolore laboriosam temporibus dolorum in vel fuga tenetur. Nam.</p>
          <StaticImage className="flex-half rounded-xl" src="../images/Hero.jpg" alt=""/>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
