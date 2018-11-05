import React from 'react'
import { Trans } from 'react-i18next'
import styles from './banner.module.css'

export default function () {
  return (
    <div className={styles.banner}>
      <h1 className={styles.h1}>
        <Trans>home-banner-h1</Trans>
      </h1>
      <h2 className={styles.h2}>
        <Trans>home-banner-h2</Trans>
      </h2>
      <button type="button" className={styles.cta}>
        <Trans>home-banner-button-services</Trans>
      </button>
    </div>
  )
}
