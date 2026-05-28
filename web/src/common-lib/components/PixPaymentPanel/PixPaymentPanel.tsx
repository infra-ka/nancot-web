import { Camera, CheckCircle2, Copy } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { CyberButton } from "../CyberButton/CyberButton";
import "./PixPaymentPanel.css";

export const mockPixCode =
  "00020126580014BR.GOV.BCB.PIX0136mock-janelinha-subs-nancot520400005303986540515.905802BR5925JANELINHA SUBS MOCK6008GOIANIA62070503***6304ABCD";

type PixPaymentPanelProps = {
  onPaid: () => void;
  onScanPhysicalQrCode: () => void;
};

export function PixPaymentPanel({ onPaid, onScanPhysicalQrCode }: PixPaymentPanelProps) {
  const [copied, setCopied] = useState(false);

  async function copyPixCode() {
    await navigator.clipboard.writeText(mockPixCode);
    setCopied(true);
  }

  return (
    <div className="pix-panel">
      <div className="pix-panel__qr" aria-label="Mocked PIX QR Code">
        <QRCodeSVG value={mockPixCode} size={168} bgColor="#02080b" fgColor="#8dff5a" />
      </div>
      <label className="pix-panel__code">
        PIX copy-and-paste code
        <textarea readOnly value={mockPixCode} />
      </label>
      <div className="pix-panel__actions">
        <CyberButton onClick={copyPixCode} variant="secondary">
          <Copy size={18} /> Copy PIX code
        </CyberButton>
        <CyberButton onClick={onPaid} className="haptic-target--confirm">
          <CheckCircle2 size={18} /> I have paid
        </CyberButton>
        <CyberButton onClick={onScanPhysicalQrCode} variant="ghost">
          <Camera size={18} /> Scan physical QR Code
        </CyberButton>
      </div>
      {copied ? <p className="pix-panel__feedback">PIX code copied.</p> : null}
    </div>
  );
}
