import { Component } from "react"
import Prism from "prismjs"

import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"

export default class extends Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render () {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="blog-post-container">
          <div className="blog-post-top-section">
            <h1>Your Blog Post Title</h1>
            <div className="blog-post-top-meta">
              <span>02/26/2021</span>
              <a className="blog-post-top-tag-btn" href="/blog/tags/javascript">
                <span>javascript</span>
              </a>
              <a className="blog-post-top-tag-btn" href="/blog/tags/css">
                <span>css</span>
              </a>
              <a className="blog-post-top-tag-btn" href="/blog/tags/C#">
                  <span>C#</span>
              </a>
            </div>
          </div>
          <div className="blog-post-body-content">
            <div className="blog-post-body-snippet">
              <nav className="blog-post-body-code-snippet-header">
                <span>example.js</span>
              </nav>
              <pre className="line-numbers language-js">
                <code className= "js language-js">
                  {
                     `
                     // Set your secret key: remember to switch to your live secret key in production
                     // See your keys here: https://dashboard.stripe.com/account/apikeys
           
                     const stripe = require('stripe')('sk_test_hZIksNuZZMXLLFn8q5LtPDAm00Y6r5kUg7')
           
                     (async () => {
                       const paymentIntent = await stripe.paymentIntents.create({
                         amount: 1099,
                         currency: 'usd',
                       })
                     })()
                   `
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}