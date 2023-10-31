import React from 'react';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './about-style';

function FooterWithDeco() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Title align="center">
          {t('saas-landing.about_title')}
        </Title>
        <Typography display="block" component="h5" className={text.subtitle2} align="center">
          {t('saas-landing.about_subtitle')}
        </Typography>
        <div className={classes.action}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/"
          >
            {t('saas-landing.contact_with_us')}
          </Button>
        </div>
      </div>
    </div>

  );
}

export default FooterWithDeco;
