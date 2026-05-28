import { CreditCard, Landmark, QrCode, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { CartItem } from "../../types/cart";
import { PaymentMethod } from "../../types/checkout";
import { formatCurrency } from "../../utils/format";
import { createOrderProtocol } from "../../utils/protocol";
import { CyberButton } from "../CyberButton/CyberButton";
import { PixPaymentPanel } from "../PixPaymentPanel/PixPaymentPanel";
import "./CheckoutModal.css";

type CheckoutModalProps = {
  items: CartItem[];
  subtotal: number;
  physicalQrStatus?: string;
  onClose: () => void;
  onOpenCamera: () => void;
  onConfirmed: () => void;
};

export function CheckoutModal({
  items,
  subtotal,
  physicalQrStatus,
  onClose,
  onOpenCamera,
  onConfirmed
}: CheckoutModalProps) {
  const { messages } = useI18n();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [protocol, setProtocol] = useState<string | null>(null);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const canSimulateCard = useMemo(
    () => cardName.trim() && cardNumber.trim() && expiration.trim() && cvv.trim(),
    [cardName, cardNumber, cvv, expiration]
  );

  function confirmOrder() {
    // TODO: integrate Nancot-Gloves haptic feedback here
    setProtocol(createOrderProtocol("JanelinhaSubs"));
    onConfirmed();
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section aria-modal="true" aria-label="Checkout" className="checkout-modal" role="dialog">
        <button className="modal-close haptic-target haptic-target--danger" onClick={onClose} aria-label={messages.checkout.close}>
          <X size={20} />
        </button>
        <p className="checkout-modal__eyebrow">{messages.checkout.eyebrow}</p>
        <h2>{protocol ? messages.checkout.confirmedTitle : messages.checkout.finishOrder}</h2>

        {protocol ? (
          <div className="checkout-confirmation">
            <p>{messages.checkout.confirmedMessage} {protocol}</p>
            <strong>{protocol}</strong>
            <CyberButton onClick={onClose}>Close</CyberButton>
          </div>
        ) : (
          <>
            <div className="checkout-review">
              {items.map((item) => (
                <div className="checkout-review__item" key={item.cartItemId}>
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <strong>{formatCurrency(item.price * item.quantity)}</strong>
                </div>
              ))}
              <div className="checkout-review__total">
                <span>{messages.checkout.total}</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
            </div>

            <div className="payment-grid" aria-label={messages.checkout.paymentMethod}>
              <CyberButton
                onClick={() => setPaymentMethod("pix")}
                className={paymentMethod === "pix" ? "haptic-target--selected" : ""}
                variant="secondary"
              >
                <QrCode size={18} /> {messages.checkout.pix}
              </CyberButton>
              <CyberButton onClick={() => setPaymentMethod("credit")} variant="ghost">
                <CreditCard size={18} /> {messages.checkout.credit}
              </CyberButton>
              <CyberButton onClick={() => setPaymentMethod("debit")} variant="ghost">
                <Landmark size={18} /> {messages.checkout.debit}
              </CyberButton>
            </div>

            {physicalQrStatus ? <p className="checkout-status">{physicalQrStatus}</p> : null}

            {paymentMethod === "pix" ? (
              <PixPaymentPanel onPaid={confirmOrder} onScanPhysicalQrCode={onOpenCamera} />
            ) : null}

            {paymentMethod === "credit" || paymentMethod === "debit" ? (
              <form className="card-form">
                <label>
                  {messages.checkout.printedName}
                  <input value={cardName} onChange={(event) => setCardName(event.target.value)} />
                </label>
                <label>
                  {messages.checkout.cardNumber}
                  <input inputMode="numeric" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
                </label>
                <div className="card-form__row">
                  <label>
                    {messages.checkout.expirationDate}
                    <input placeholder="MM/YY" value={expiration} onChange={(event) => setExpiration(event.target.value)} />
                  </label>
                  <label>
                    {messages.checkout.cvv}
                    <input inputMode="numeric" value={cvv} onChange={(event) => setCvv(event.target.value)} />
                  </label>
                </div>
                <CyberButton disabled={!canSimulateCard} onClick={confirmOrder} variant="secondary">
                  {messages.checkout.simulateCardPayment}
                </CyberButton>
              </form>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
}
