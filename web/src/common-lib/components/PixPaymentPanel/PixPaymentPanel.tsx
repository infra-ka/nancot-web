import { Camera, CheckCircle2, Copy } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { CyberButton } from "../CyberButton/CyberButton";
import "./PixPaymentPanel.css";

export const mockPixCode =
  "00020126580014BR.GOV.BCB.PIX0136mock-janelinha-subs-nancot520400005303986540515.905802BR5925JANELINHA SUBS MOCK6008GOIANIA62070503***6304ABCD";

type PixPaymentPanelProps = {
  onPaid: () => void;
  onScanPhysicalQrCode: () => void;
};

export function PixPaymentPanel({ onPaid, onScanPhysicalQrCode }: PixPaymentPanelProps) {
  const { messages } = useI18n();
  const [copied, setCopied] = useState(false);

  async function copyPixCode() {
    await navigator.clipboard.writeText(mockPixCode);
    setCopied(true);
  }

  return (
    <div className="pix-panel">
      <div className="pix-panel__qr" aria-label={messages.pix.qrLabel}>
        <QRCodeSVG value={mockPixCode} size={168} bgColor="#02080b" fgColor="#8dff5a" />
      </div>
      <label className="pix-panel__code">
        {messages.pix.codeLabel}
        <textarea readOnly value={mockPixCode} />
      </label>
      <div className="pix-panel__actions">
        <CyberButton onClick={copyPixCode} variant="secondary">
          <Copy size={18} /> {messages.pix.copy}
        </CyberButton>
        <CyberButton onClick={onPaid} className="haptic-target--confirm">
          <CheckCircle2 size={18} /> {messages.pix.paid}
        </CyberButton>
        <CyberButton onClick={onScanPhysicalQrCode} variant="ghost">
          <Camera size={18} /> {messages.pix.scan}
        </CyberButton>
      </div>
      {copied ? <p className="pix-panel__feedback">{messages.pix.copied}</p> : null}
    </div>
  );
}
