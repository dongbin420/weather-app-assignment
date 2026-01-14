import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { ALIAS_MAX_LENGTH } from '@/shared/constants/constants';
import { useFavoritesStore } from '@/features/favorite/model/store';
import AliasEditModal from './AliasEditModal';

interface AliasEditButtonProps {
  placeId: string;
  baseLabel: string;
  currentAlias?: string;
}

function AliasEditButton({ placeId, baseLabel, currentAlias }: AliasEditButtonProps) {
  const setAlias = useFavoritesStore((s) => s.setAlias);
  const clearAlias = useFavoritesStore((s) => s.clearAlias);
  const [open, setOpen] = useState(false);
  const [draftAlias, setDraftAlias] = useState('');

  const handleOpen = () => {
    const initialAlias = (currentAlias ?? baseLabel).slice(0, ALIAS_MAX_LENGTH);
    setDraftAlias(initialAlias);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequestConfirm = () => {
    const next = draftAlias.trim();
    if (!next) return;

    if (next === baseLabel) {
      clearAlias(placeId);
    } else {
      setAlias(placeId, next);
    }

    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="이름 변경"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleOpen();
        }}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition cursor-pointer"
      >
        <Pencil className="h-4 w-4" />
      </button>

      <AliasEditModal
        open={open}
        value={draftAlias}
        onChange={setDraftAlias}
        onCancel={handleClose}
        onSubmit={handleRequestConfirm}
      />
    </>
  );
}

export default AliasEditButton;
