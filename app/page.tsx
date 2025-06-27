import Dropzone from '@/components/dropzone';
import { BsFiletypeJpg, BsFiletypePng, BsFiletypeGif, BsFiletypeBmp, BsFiletypeTiff, BsFiletypeSvg } from 'react-icons/bs';
import {
  PiFileVideo,
  PiFileAudio,
} from 'react-icons/pi';
import { FaArrowRight } from 'react-icons/fa';

const conversionOptions = [
  { from: 'JPG', to: ['PNG', 'GIF', 'BMP', 'WEBP', 'ICO', 'TIFF', 'SVG'], Icon: BsFiletypeJpg },
  { from: 'PNG', to: ['JPG', 'GIF', 'BMP', 'WEBP', 'ICO', 'TIFF', 'SVG'], Icon: BsFiletypePng },
  { from: 'GIF', to: ['JPG', 'PNG', 'BMP', 'WEBP', 'ICO', 'TIFF', 'SVG'], Icon: BsFiletypeGif },
  { from: 'BMP', to: ['JPG', 'PNG', 'GIF', 'WEBP', 'ICO', 'TIFF', 'SVG'], Icon: BsFiletypeBmp },
  { from: 'WEBP', to: ['JPG', 'PNG', 'GIF', 'BMP', 'ICO', 'TIFF', 'SVG'], Icon: BsFiletypeBmp },
  { from: 'ICO', to: ['JPG', 'PNG', 'GIF', 'BMP', 'WEBP', 'TIFF', 'SVG'], Icon: BsFiletypeGif },
  { from: 'TIFF', to: ['JPG', 'PNG', 'GIF', 'BMP', 'WEBP', 'ICO', 'SVG'], Icon: BsFiletypeTiff },
  { from: 'SVG', to: ['JPG', 'PNG', 'GIF', 'BMP', 'WEBP', 'ICO', 'TIFF'], Icon: BsFiletypeSvg },
  { from: 'Video', to: ['MP4', 'AVI', 'MOV', 'WMV', 'FLV', 'MKV', 'WebM'], Icon: PiFileVideo },
  { from: 'Audio', to: ['MP3', 'WAV', 'OGG', 'AAC', 'WMA', 'FLAC', 'M4A'], Icon: PiFileAudio },
];

export default function Home() {
  return (
    <div className="pb-8 space-y-16">
      <div className="space-y-6">
        <h1 className="text-3xl font-medium text-center md:text-5xl">
          Free Unlimited File Converter with BitMorph
        </h1>
        <p className="text-center text-muted-foreground text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
          Introducing BitMorph - your go-to online tool for unlimited and free
          multimedia conversion. Easily convert images, audio, and videos
          without any restrictions. Start converting now and streamline your
          content effortlessly with BitMorph!
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium text-center md:text-4xl">
          What can you convert?
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {conversionOptions.map((option) => (
            <div key={option.from} className="p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                <option.Icon className="w-8 h-8" />
                <h3 className="text-lg font-semibold">{option.from}</h3>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="w-4 h-4" />
                <div className="flex flex-wrap gap-2">
                  {option.to.map((to) => (
                    <span key={to} className="px-2 py-1 text-sm bg-gray-200 rounded-md">
                      {to}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dropzone />
    </div>
  );
}