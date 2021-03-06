import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const KonsertPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="background-depending-on-page">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h2>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

KonsertPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const KonsertPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <KonsertPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

KonsertPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default KonsertPage;

export const aboutPageQuery = graphql`
  query KonsertPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
