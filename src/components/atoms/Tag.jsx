import { TAG_COLORS } from "../../data/Tag_colors";

export default function Tag({ label, color }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${TAG_COLORS[color]}`}>
      {label}
    </span>
  );
}