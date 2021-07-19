import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>About Me</h1>
            <p>I’m Cheboi moses, a full stack software developer and technical writer.</p>
            <p>I started this website as a place to document everything I learned while going through a career change. I learn in public and write about everything I know.</p>
          </div>
          <div className="about-section">
            <h2>My Projects</h2>
            <ul>
              <li><a href="#">Discourse</a> – A platform for community discussion. Free, open, simple.</li>
              <li><a href="#">Seconds Converter</a> – Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js.</li>
              <li><a href="#">Showdown</a> – A bidirectional Markdown to HTML to Markdown converter written in Javascript.</li>
              <li><a href="#">Node Schedule</a> –A cron-like and not-cron-like job scheduler for Node.</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Currently Using</h2>
            <ul>
              <li><strong>Computer</strong>: Custom Linux And Windows Desktop </li>
              <li><strong>Hosting</strong>: <a href="https://m.do.co/c/ce20017d8588">DigitalOcean</a></li>
              <li><strong>Editor</strong>: <a href="https://code.visualstudio.com/">visualstudio</a></li>
              <li><strong>Coding Framework</strong>: <a href="https://nextjs.org">Next.js</a></li>
              <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}