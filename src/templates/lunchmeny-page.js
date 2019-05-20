import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LunchmenyPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content



    return (
        <section className="section section--gradient lunch">
            <div className="container">
                <div className="background-depending-on-page" >
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                        {title}
                    </h2>
                </div>
                <div className="columns">
                    <div className="column is-11 is-offset-1">
                        <div className="section">

                            <PageContent className="content" content={content} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

LunchmenyPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const LunchmenyPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <LunchmenyPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
}

LunchmenyPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default LunchmenyPage

export const aboutPageQuery = graphql`
  query LunchmenyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
