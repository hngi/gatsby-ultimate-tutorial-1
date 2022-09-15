import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './teaser'
import Grid from "./grid"
import Feature from "./feature"
import Header from "./header"
import Footer from "./footer"
<<<<<<< HEAD
import HeroSection from './hero-section';
=======
import Config from "./config"
import MenuLink from "./menuLink"
>>>>>>> part-3

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    'hero-section': HeroSection,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    config: Config,
    "menu_link": MenuLink
  }
});

const Layout = ({ children }) => {
  return (
    <div className="text-center">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout