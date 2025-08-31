import React from 'react';
import CategoryHeader from './category-header';
import GridContainer from '../grid-container';

const WhyUseSmartCards: React.FC = () => {
  return (
    <div>
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-blue-500 dark:text-blue-400">
          Why Tailwind CSS?
        </CategoryHeader>
      </GridContainer>
    </div>
  );
};

export default WhyUseSmartCards;
