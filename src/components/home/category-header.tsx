import clsx from 'clsx';

export default function CategoryHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        className,
        'text-left font-mono font-semibold tracking-widest uppercase px-6',
        // Add vertical margin for small/medium devices
        'mt-10 sm:mt-8 md:mt-8 lg:mt-0',
        // Responsive font sizes
        'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
      )}
    >
      {children}
    </p>
  );
}
