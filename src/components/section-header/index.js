import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header-wrapper">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SectionHeader;
