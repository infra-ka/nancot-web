import { CheckCircle2, Video, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useCameraPermission } from "../../hooks/useCameraPermission";
import { useI18n } from "../../i18n/I18nProvider";
import { CyberButton } from "../CyberButton/CyberButton";
import "./CameraPermissionModal.css";

type CameraPermissionModalProps = {
  onClose: () => void;
  onDetected: () => void;
};

export function CameraPermissionModal({ onClose, onDetected }: CameraPermissionModalProps) {
  const { messages } = useI18n();
  const { status, stream, requestCamera, stop } = useCameraPermission();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  function close() {
    // TODO: integrate Nancot-Gloves haptic feedback here
    stop();
    onClose();
  }

  function detectQrCode() {
    // TODO: integrate Nancot-Gloves haptic feedback here
    stop();
    onDetected();
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section aria-modal="true" aria-label={messages.camera.title} className="camera-modal" role="dialog">
        <button className="modal-close haptic-target haptic-target--danger" onClick={close} aria-label={messages.camera.close}>
          <X size={20} />
        </button>
        <p className="checkout-modal__eyebrow">{messages.camera.eyebrow}</p>
        <h2>{messages.camera.title}</h2>
        <p className="camera-modal__copy">
          {messages.camera.copy}
        </p>
        {status === "granted" ? (
          <video ref={videoRef} autoPlay muted playsInline className="camera-modal__video" aria-label={messages.camera.preview} />
        ) : (
          <div className="camera-modal__placeholder">
            <Video size={42} />
          </div>
        )}
        {status === "denied" ? <p className="camera-modal__status">{messages.camera.denied}</p> : null}
        {status === "unsupported" ? <p className="camera-modal__status">{messages.camera.unsupported}</p> : null}
        <div className="camera-modal__actions">
          <CyberButton onClick={requestCamera} disabled={status === "requesting"}>
            <Video size={18} /> {messages.camera.allow}
          </CyberButton>
          <CyberButton onClick={detectQrCode} disabled={status !== "granted"} variant="secondary">
            <CheckCircle2 size={18} /> {messages.camera.simulate}
          </CyberButton>
        </div>
      </section>
    </div>
  );
}
