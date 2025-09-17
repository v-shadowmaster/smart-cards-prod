import GridContainer from '../grid-container';
import CategoryHeader from './category-header';

export default function Footer() {
  return (
    <div>
      <GridContainer className=" mt-10 px-7">
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium font-mono text-gray-600 max-sm:px-4 dark:text-gray-400 ">
          Copyright © 2025 AUMBIT-IO
        </p>
      </GridContainer>
    </div>
  );
}
