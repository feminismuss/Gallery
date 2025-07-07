import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPieceDetails from "@/components/ArtPieceDetails";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) return <p>Bilder werden aus dem Keller geholt</p>;
  if (error) return <p>Fehler beim Laden: {error.message}</p>;
  if (!data) return null;

  const selectedPiece = data.find((piece) => piece.slug === slug);
  if (!selectedPiece) return <p>kein Bild? keine Details!</p>;

  return <ArtPieceDetails piece={selectedPiece} onBack={() => router.back()} />;
}
