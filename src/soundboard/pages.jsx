import SoundButton from "@/app/components/sound";

export default function Soundboard() {
  const sounds = [
    { label: "Clap 👏", file: "/sounds/sound-board_sounds_applause.mp3" },
    { label: "Boo 🙉", file: "/sounds/sound-board_sounds_boo.mp3" },
  
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-10">Soundboard 🔊</h1>

      <div className="grid grid-cols-2 gap-6">
        {sounds.map((s, i) => (
          <SoundButton key={i} label={s.label} sound={s.file} />
        ))}
      </div>
    </div>
  );
}