import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from 'enzyme'
import HomeBanner from './banner'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../shared/i18n'


describe('HomeBanner', () =>

  it('should renders correctly', () => {
    const tree = renderer.create(
      <I18nextProvider i18n={ i18n }>
        <HomeBanner />
      </I18nextProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

)
