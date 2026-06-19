import Image from "next/image";
import styles from "./ShowsSection.module.css";
import { useState } from "react";

export interface Show {
  title: string;
  genre: string;
  type: string;
  poster: string;
  favorite: boolean;
}

interface ShowCardProps {
  show: Show;
  index: number;
}

export default function ShowCard({ show, index }: ShowCardProps) {
  const [imgError, setImgError] = useState(false);

  // Stagger alternating cards to achieve the up-and-down zigzag layout
  const cardStyle = index % 2 === 0 ? { transform: "translateY(-40px)" } : {};

  return (
    <div style={cardStyle}>
      <div className={styles.card}>
        <div className={styles.posterWrap}>
          {!imgError ? (
            <Image
              src={show.poster}
              alt={show.title}
              fill
              style={{ objectFit: "cover" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className={styles.placeholderTitle}>{show.title}</span>
          )}
        </div>

        {/* Favorite badge — only on first card or if explicitly favorite */}
        {show.favorite && (
          <div className={styles.favBadge}>
            ✦ PARTH&apos;S FAVORITE
          </div>
        )}
      </div>

      {/* Below card — outside the card box */}
      <div className={styles.cardMeta}>
        <div className={styles.metaLeft}>
          <p className={styles.showTitle}>{show.title}</p>
          <p className={styles.showGenre}>{show.genre}</p>
        </div>
        <div className={styles.typePill}>{show.type}</div>
      </div>
    </div>
  );
}
