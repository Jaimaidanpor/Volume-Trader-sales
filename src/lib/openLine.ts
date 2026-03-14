export const LINE_URL = "https://line.me/R/ti/p/@419zhonc";
const LINE_APP = "line://ti/p/@419zhonc";

export function openLine(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    // line:// scheme — iOS opens LINE app without navigating the browser tab
    window.location.href = LINE_APP;
  } else {
    window.open(LINE_URL, "_blank", "noopener,noreferrer");
  }
}
