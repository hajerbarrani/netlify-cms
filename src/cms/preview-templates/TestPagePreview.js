import React from 'react'
import PropTypes from 'prop-types'
import { TestPageTemplate } from '../../templates/test-page'

const TestPagePreview = ({ entry, widgetFor }) => (
  <TestPageTemplate />
)

TestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TestPagePreview
