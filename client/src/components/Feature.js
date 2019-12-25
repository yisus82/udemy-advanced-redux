import React from 'react';
import requireAuth from './requireAuth';

const Feature = () => <div>This is a secret feature!</div>;

export default requireAuth(Feature);
