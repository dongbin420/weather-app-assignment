import type { PropsWithChildren } from 'react';

type StatusMessageProps = PropsWithChildren;

function StatusMessage({ children }: StatusMessageProps) {
  return <div className="grid min-h-dvh place-items-center px-6 py-10 text-center text-sm text-slate-700">{children}</div>;
}

export default StatusMessage;
