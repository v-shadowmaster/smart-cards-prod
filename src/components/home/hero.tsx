import React from 'react';
import GridContainer from '../grid-container';
import { AnimatedTooltipPreview } from './tooltip';
import Glass from './glass-button';
import Iphone from './iphone-mockup';

const Hero: React.FC = () => {
  return (
    <div>
      {/* Main hero section with responsive layout */}
      <div className="lg:flex lg:gap-8 lg:items-start max-w-full mx-auto px-2 lg:px-2">
        {/* Left side - Text content */}
        <div className="lg:flex-1">
          <div
            aria-hidden="true"
            className="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25"
          >
            <span className="hidden max-sm:inline">AI - POWERED , </span>
            <span className="hidden sm:max-md:inline">AI - POWERED , </span>
            <span className="hidden lg:max-xl:inline">AI - POWERED , </span>
            <span className="hidden xl:inline">AI - POWERED , </span>
            <span className="inline dark:hidden">UTILITY FIRST , </span>
            <span className="hidden dark:inline">USER FIRST</span>
            USER FIRST <span className="max-sm:hidden">DESIGN</span>
          </div>
          <GridContainer>
            <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl font-[var(--font-geist-sans)]">
              Plan the present
            </h1>
            <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl font-[var(--font-geist-sans)]">
              Build the future
            </h1>
          </GridContainer>

          <div
            aria-hidden="true"
            className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
          >
            Every necessary utility features in one app{' '}
          </div>
          <GridContainer>
            <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
              Replace every app with Smart Cards.{' '}
              <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">
                AI-powered
              </span>
              ,{' '}
              <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">
                Utility first
              </span>
              ,{' '}
              <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">
                User first
              </span>{' '}
              platform designed to transform your phone into a unified command
              center
            </p>
          </GridContainer>
          <GridContainer className="mt-4 sm:mt-10 sm:px-2">
            <div className="flex items-center gap-10 max-sm:px-4">
              {/* Tooltip Avatars */}
              <div className="flex items-center gap-1">
                <AnimatedTooltipPreview />
              </div>

              {/* Button (hidden on small screens) */}
              <div className="hidden sm:block">
                <Glass />
              </div>
            </div>
          </GridContainer>

          {/* Button (only for small screens) */}
          <GridContainer className="mt-10 px-4 sm:hidden">
            <Glass />
          </GridContainer>
        </div>

        {/* Right side - iPhone (on large screens only) with proper spacing */}
        <div className="hidden lg:flex lg:flex-shrink-0 lg:justify-center lg:px-8 xl:px-12">
          <div className="lg:mr-4 xl:mr-8">
            <Iphone />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:hidden px-4">
        <div className="flex justify-center">
          <Iphone />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const TRANSITION = { duration: 0.35 };
