import { createPortal } from 'react-dom';
import { ALIAS_MAX_LENGTH } from '@/shared/constants/constants';

interface AliasEditModalProps {
  open: boolean;
  value: string;
  onChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const baseButtonClass =
  'rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 hover:bg-white/20 transition cursor-pointer';

function AliasEditModal({ open, value, onChange, onCancel, onSubmit }: AliasEditModalProps) {
  if (!open) return null;

  const isSubmitDisabled = value.trim().length === 0;

  const content = (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="fixed inset-0 z-40 flex items-center justify-center p-4"
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
        className="relative z-10 w-full max-w-sm rounded-2xl border border-white/15 bg-black/80 p-5 text-white shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-sm font-semibold">즐겨찾기 이름 변경</h2>
        <p className="mt-2 text-xs text-white/70">장소의 이름을 변경할 수 있습니다.</p>
        <div className="mt-3">
          <input
            value={value}
            maxLength={ALIAS_MAX_LENGTH}
            placeholder={'이름을 입력하세요'}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
          />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onCancel} className={baseButtonClass}>
            취소
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitDisabled}
            className={[baseButtonClass, isSubmitDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-white/25'].join(
              ' ',
            )}
          >
            변경
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof document === 'undefined') return content;

  return createPortal(content, document.body);
}

export default AliasEditModal;
