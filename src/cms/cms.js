import CMS from 'netlify-cms'

//import TestPagePreview from './preview-templates/TestPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

//CMS.registerPreviewTemplate('home', TestPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
