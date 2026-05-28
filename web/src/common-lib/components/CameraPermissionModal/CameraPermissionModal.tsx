import { CheckCircle2, Video, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useCameraPermission } from "../../hooks/useCameraPermission";
import { CyberButton } from "../CyberButton/CyberButton";
import "./CameraPermissionModal.css";

type CameraPermissionModalProps = {
  onClose: () => void;
  onDetected: () => void;
};

export function CameraPermissionModal({ onClose, onDetected }: CameraPermissionModalProps) {
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
      <section aria-modal="true" aria-label="Camera permission" className="camera-modal" role="dialog">
        <button className="modal-close haptic-target haptic-target--danger" onClick={close} aria-label="Close camera permission">
          <X size={20} />
        </button>
        <p className="checkout-modal__eyebrow">Physical QR Code</p>
        <h2>Camera scan</h2>
        <p className="camera-modal__copy">
          The app needs camera access to preview a physical QR Code at the counter.
        </p>
        {status === "granted" ? (
          <video ref={videoRef} autoPlay muted playsInline className="camera-modal__video" aria-label="Camera preview" />
        ) : (
          <div className="camera-modal__placeholder">
            <Video size={42} />
          </div>
        )}
        {status === "denied" ? <p className="camera-modal__status">Camera permission was blocked by the browser.</p> : null}
        {status === "unsupported" ? <p className="camera-modal__status">This browser does not support camera access.</p> : null}
        <div className="camera-modal__actions">
          <CyberButton onClick={requestCamera} disabled={status === "requesting"}>
            <Video size={18} /> Allow camera
          </CyberButton>
          <CyberButton onClick={detectQrCode} disabled={status !== "granted"} variant="secondary">
            <CheckCircle2 size={18} /> Simulate QR Code read
          </CyberButton>
        </div>
      </section>
    </div>
  );
}
