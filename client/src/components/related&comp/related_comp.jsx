/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItems from './components/RelatedItems';
import YourOutfit from './components/YourOutfit';
import API_KEY from '../../../../config';
import 'regenerator-runtime/runtime';

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const RelatedItemsAndComparison = () => {

  return (
    <div className="allComponents">
      <RelatedItems/>
      <YourOutfit />
    </div>
  );
};

export default RelatedItemsAndComparison;
