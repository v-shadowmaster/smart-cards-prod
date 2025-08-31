import React from 'react';
import clsx from 'clsx';
import CategoryHeader from './category-header';
import GridContainer from '../grid-container';
import { Ipad } from './ipad';
import { SidebarDemo } from './sidebar-demo';

const WhyUseSmartCards: React.FC = () => {
  return (
    <div>
      <div className=" w-full mt-10 " />
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-sky-900 dark:text-blue-400">
          Why Use SMART-CARDS?
        </CategoryHeader>
      </GridContainer>
      <div className="mt-8"></div>
      <GridContainer className="pl-4">
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-2 dark:text-gray-400">
          Replace every app with Smart Cards. platform designed to transform
          your phone into a unified command center
        </p>
      </GridContainer>
      <GridContainer className="mt-16">
        <div className="w-full bg-gray-950/5 p-2 dark:bg-white/10">
          <div className="not-prose">
            <div className="@container rounded-xl in-[figure]:-mx-1 in-[figure]:-mb-1">
              <div className={clsx(' p-1 text-sm ')}>
                <Ipad>
                  <SidebarDemo />
                </Ipad>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
      <div
        className="mt-10 w-full h-px bg-neutral-300 dark:bg-neutral-700"
        aria-hidden="true"
      />
    </div>
  );
};

export default WhyUseSmartCards;
