import { useEffect } from "react";

const legacyAnchors = {
  rec766786929: "home",
  rec2226318861: "bundle",
  rec2331192831: "club",
  rec3131244001: "weight",
  rec766997420: "channel-title",
  rec766991256: "rec766994231",
  rec2342547831: "results",
  rec2342558491: "results",
  rec767039401: "contacts",
};

export default function useSectionAnchors() {
  useEffect(() => {
    function followAnchor() {
      const hash = location.hash.slice(1);
      const target = document.getElementById(legacyAnchors[hash] || hash);
      if (!target) return;
      for (let ancestor = target; ancestor; ancestor = ancestor.parentElement) {
        if (ancestor.tagName === "DETAILS") ancestor.open = true;
      }
      target.scrollIntoView({ behavior: "instant" });
    }
    const frame = requestAnimationFrame(followAnchor);
    // Native section anchors keep the existing smooth scrolling. Old Tilda IDs need a mapping.
    function followLegacyAnchor() {
      if (legacyAnchors[location.hash.slice(1)]) followAnchor();
    }
    window.addEventListener("hashchange", followLegacyAnchor);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", followLegacyAnchor);
    };
  }, []);
}
