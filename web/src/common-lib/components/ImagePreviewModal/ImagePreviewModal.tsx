import { X } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";
import "./ImagePreviewModal.css";

type ImagePreviewModalProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function ImagePreviewModal({ src, alt, onClose }: ImagePreviewModalProps) {
  const { messages } = useI18n();

  return (
    <div className="modal-backdrop" role="presentation">
      <section aria-label={messages.app.imageModalTitle} aria-modal="true" className="image-preview-modal" role="dialog">
        <button className="modal-close haptic-target haptic-target--danger" onClick={onClose} aria-label="Close image preview">
          <X size={20} />
        </button>
        <h2>{messages.app.imageModalTitle}</h2>
        <img alt={alt} src={src} />
      </section>
    </div>
  );
}
