import { useOverlayStore } from "@/lib/store";
import { BaseOverlay } from "@/components/Common/Overlays";

export default function OverlayProvider() {
  const { isOpen, overlay, closeOverlay } = useOverlayStore();
  if (!isOpen || !overlay) return null;
  return (
    <BaseOverlay key={overlay.state} onClose={closeOverlay}>
      {overlay.content}
    </BaseOverlay>
  );
}
