import Image from "next/image";

export default function Avatar() {
  return (
    <div className="rounded-full h-14 w-14 shadow-lg">
      <Image
        alt="Olivier Fortier"
        className="rounded-full"
        src={"/medias/Fortier_Olivier_Avatar.jpg"}
        height={100}
        width={100}
      />
    </div>
  );
}
