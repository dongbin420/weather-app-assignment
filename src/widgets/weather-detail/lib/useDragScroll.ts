import { useRef } from 'react';
import type { DragEvent, PointerEventHandler } from 'react';

export const useDragScroll = <T extends HTMLElement>() => {
  const listRef = useRef<T | null>(null);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const handlePointerDown: PointerEventHandler<T> = (event) => {
    if (!listRef.current) return;
    event.preventDefault();
    draggingRef.current = true;
    listRef.current.setPointerCapture(event.pointerId);
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = listRef.current.scrollLeft;
  };

  const endDrag = (event: PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (!listRef.current) return;
    try {
      listRef.current.releasePointerCapture(event.pointerId);
    } catch {
      // endDrag가 이미 실행되어 포인터가 해제되었을때 또 실행되는 경우 에러 무시
    }
  };

  const handlePointerUp: PointerEventHandler<T> = (event) => {
    endDrag(event.nativeEvent);
  };

  const handlePointerCancel: PointerEventHandler<T> = (event) => {
    endDrag(event.nativeEvent);
  };

  const handlePointerMove: PointerEventHandler<T> = (event) => {
    if (!draggingRef.current || !listRef.current) return;
    event.preventDefault();
    const currentX = event.clientX;
    const delta = currentX - dragStartXRef.current;
    listRef.current.scrollLeft = dragStartScrollRef.current - delta;
  };

  return {
    listRef,
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
      onPointerMove: handlePointerMove,
      onDragStart: (event: DragEvent<T>) => event.preventDefault(),
    },
  };
};
