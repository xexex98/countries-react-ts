import { PropsWithChildren } from 'react';

export default function Wrapper({ children }: PropsWithChildren) {
  return <div className="container mx-auto">{children}</div>;
}
