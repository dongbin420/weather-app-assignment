import { useToastStore } from '../model/toastStore';

function Toast() {
  const message = useToastStore((s) => s.message);

  if (!message) return null;

  return (
    <div className="fixed left-1/2 top-4 z-9999 -translate-x-1/2 rounded-2xl border border-white/15 bg-black/40 px-4 py-2 text-sm text-amber-200/90 backdrop-blur">
      {message}
    </div>
  );
}

export default Toast;
