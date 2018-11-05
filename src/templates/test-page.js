import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import styles from '../components/banner/banner.module.css'

export const TestPageTemplate = ({ title, subtitle, url, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className={styles.banner}>
        <h1 className={styles.h1}>
          {title}
        </h1>
        <h2 className={styles.h2}>
          {subtitle}
        </h2>
        <button type="button" className={styles.cta}>
          {url}
        </button>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TestPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TestPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        url={post.frontmatter.url}
        content={post.html}
      />
    </Layout>
  )
}

TestPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestPage

export const testPageQuery = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        url
      }
    }
  }
`


