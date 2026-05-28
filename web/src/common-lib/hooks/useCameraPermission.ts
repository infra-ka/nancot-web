import { useCallback, useEffect, useState } from "react";

export type CameraPermissionState = "idle" | "requesting" | "granted" | "denied" | "unsupported";

export function useCameraPermission() {
  const [status, setStatus] = useState<CameraPermissionState>("idle");
  const [stream, setStream] = useState<MediaStream | null>(null);

  const stop = useCallback(() => {
    setStream((currentStream) => {
      currentStream?.getTracks().forEach((track) => track.stop());
      return null;
    });
    setStatus("idle");
  }, []);

  const requestCamera = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("unsupported");
      return;
    }

    try {
      setStatus("requesting");
      const nextStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(nextStream);
      setStatus("granted");
    } catch {
      setStatus("denied");
    }
  }, []);

  useEffect(() => stop, [stop]);

  return {
    status,
    stream,
    requestCamera,
    stop
  };
}
