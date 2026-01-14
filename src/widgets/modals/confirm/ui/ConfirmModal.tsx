import { createPortal } from 'react-dom';

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmModal({ open, title, description, onConfirm, onCancel, confirmLabel }: ConfirmModalProps) {
  if (!open) return null;

  const content = (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="모달 닫기"
        onClick={() => {
          onCancel();
        }}
        className="absolute inset-0 bg-black/60"
      />
      <div
        className="relative z-10 w-full max-w-xs rounded-2xl border border-white/15 bg-black/80 p-5 text-white shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-sm font-semibold">{title}</h2>
        {description ? <p className="mt-2 text-xs text-white/70">{description}</p> : null}
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 hover:bg-white/20 transition cursor-pointer"
          >
            취소
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-full border border-rose-300/40 bg-rose-500/20 px-3 py-1.5 text-xs font-medium text-rose-100 hover:bg-rose-500/30 transition cursor-pointer"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof document === 'undefined') return content;

  return createPortal(content, document.body);
}

export default ConfirmModal;
