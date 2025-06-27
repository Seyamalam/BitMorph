import Dropzone from '@/components/dropzone';
import { BsFiletypeJpg, BsFiletypePng, BsFiletypeGif, BsFiletypeBmp, BsFiletypeTiff, BsFiletypeSvg } from 'react-icons/bs';
import {
  PiFileVideo,
  PiFileAudio,
} from 'react-icons/pi';
import { FaArrowRight } from 'react-icons/fa';
import { FaShieldAlt, FaLock, FaUserSecret, FaDesktop } from 'react-icons/fa';

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
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl"></div>
        <div className="relative space-y-8 p-8 md:p-12 lg:p-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-scale-in border border-primary/20">
              Free & Unlimited Conversions
            </div>
            <h1 className="text-4xl font-bold text-center md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight animate-slide-up">
              Transform Your Files
              <br />
              <span className="text-primary">Instantly</span>
            </h1>
            <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              BitMorph is your ultimate privacy-first file conversion tool. All processing happens locally in your browser - 
              your files never leave your device. No uploads, no accounts, no sign in, no limits, no servers, no privacy concerns.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 bg-info/10 text-info rounded-full text-sm font-medium border border-info/20 hover:bg-info/20 transition-colors">
              <span className="w-2 h-2 bg-info rounded-full animate-pulse"></span>
              100% Local Processing
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium border border-success/20 hover:bg-success/20 transition-colors">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              No Server Uploads
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning rounded-full text-sm font-medium border border-warning/20 hover:bg-warning/20 transition-colors">
              <span className="w-2 h-2 bg-warning rounded-full animate-pulse"></span>
              Complete Privacy
            </div>
          </div>
        </div>
      </div>

      {/* Dropzone Section - Moved to top for better UX */}
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold md:text-5xl animate-slide-up">
            Start <span className="text-primary">Converting</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up">
            Drop your files below or click to browse. Everything happens in your browser - your files stay on your device and are never uploaded anywhere.
          </p>
        </div>
        <div className="animate-scale-in">
          <Dropzone />
        </div>
      </div>

      {/* Conversion Options Section */}
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold md:text-5xl animate-slide-up">
            What can you <span className="text-primary">convert</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up">
            Support for all major file formats across images, videos, and audio files
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {conversionOptions.map((option, index) => (
            <div 
              key={option.from} 
              className="group relative p-6 border border-border rounded-2xl bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <option.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">{option.from}</h3>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {option.to.slice(0, 6).map((to) => (
                    <span 
                      key={to} 
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover:scale-105"
                    >
                      {to}
                    </span>
                  ))}
                  {option.to.length > 6 && (
                    <span className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-lg font-medium opacity-75">
                      +{option.to.length - 6} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Section */}
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold md:text-5xl animate-slide-up">
            Your <span className="text-primary">Privacy</span> Matters
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up">
            Unlike other online converters, BitMorph processes everything locally in your browser using WebAssembly technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-colors animate-scale-in">
            <div className="mx-auto w-12 h-12 bg-info/10 text-info rounded-xl flex items-center justify-center">
              <FaDesktop className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Local Processing</h3>
            <p className="text-sm text-muted-foreground">
              All conversions happen directly in your browser using WebAssembly. No server required.
            </p>
          </div>
          
          <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-colors animate-scale-in" style={{ animationDelay: '100ms' }}>
            <div className="mx-auto w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center">
              <FaShieldAlt className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">No Uploads</h3>
            <p className="text-sm text-muted-foreground">
              Your files never leave your device. No uploads to external servers or cloud storage.
            </p>
          </div>
          
          <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-colors animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="mx-auto w-12 h-12 bg-warning/10 text-warning rounded-xl flex items-center justify-center">
              <FaLock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Secure</h3>
            <p className="text-sm text-muted-foreground">
              No data collection, no tracking, no storage. Your files remain completely private.
            </p>
          </div>
          
          <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-colors animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <FaUserSecret className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Anonymous</h3>
            <p className="text-sm text-muted-foreground">
              No accounts, no registration, no personal information required. Just convert and go.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20">
            <FaShieldAlt className="w-4 h-4 mr-2" />
            <span className="font-medium">Powered by WebAssembly for maximum privacy and performance</span>
          </div>
        </div>
      </div>
    </div>
  );
}