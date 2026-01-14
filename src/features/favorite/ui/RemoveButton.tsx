import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useFavoritesStore } from '@/features/favorite/model/store';
import ConfirmModal from '../../../widgets/modals/confirm/ui/ConfirmModal';

interface RemoveButtonProps {
  placeId: string;
  placeLabel: string;
}

function RemoveButton({ placeId, placeLabel }: RemoveButtonProps) {
  const remove = useFavoritesStore((s) => s.remove);
  const clearAlias = useFavoritesStore((s) => s.clearAlias);
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    remove(placeId);
    clearAlias(placeId);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="삭제"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition cursor-pointer"
      >
        <Trash2 className="h-4 w-4" />
      </button>
      <ConfirmModal
        open={open}
        title="즐겨찾기에서 삭제할까요?"
        description={`${placeLabel}이(가) 목록에서 사라집니다.`}
        confirmLabel="삭제"
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}

export default RemoveButton;
