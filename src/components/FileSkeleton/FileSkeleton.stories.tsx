import React from 'react';
import FileSkeleton from '../FileSkeleton';
import docs from './README.md';

export default { title: 'FileSkeleton', parameters: { info: docs } };

export const basic = () => <FileSkeleton />;