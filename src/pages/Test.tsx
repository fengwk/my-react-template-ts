import React from 'react';
import { Button } from '@/components/Button';
import lessStyles from './Test.module.less';
import cssStyles from './Test.module.css';

const Test: React.FC = () => {
  return (
    <div>
      <div className={lessStyles?.app}>
        <h1>LESS Module Test</h1>
        <p>Welcome to your LESS styled application!</p>
        <p>LESS Module loaded: {lessStyles ? '✅' : '❌'}</p>
      </div>

      <div className={cssStyles?.app}>
        <h1 className={cssStyles?.title}>CSS Module Test</h1>
        <p className={cssStyles?.description}>
          Welcome to your CSS styled application!
        </p>
        <p>CSS Module loaded: {cssStyles ? '✅' : '❌'}</p>
      </div>

      <div className={cssStyles?.app}>
        <h1 className={cssStyles?.title}>Import @ Test</h1>
        <p className={cssStyles?.description}>Import from @</p>
        <p>import @: {Button !== undefined && Button !== null ? '✅' : '❌'}</p>
      </div>
    </div>
  );
};

export default Test;
