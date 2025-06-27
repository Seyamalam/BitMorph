import Link from "next/link";
import { FaHeart, FaGithub, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">BitMorph</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Privacy-first file conversion tool that processes everything locally in your browser. 
              No uploads, no servers, no tracking - your files never leave your device.
            </p>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-info rounded-full"></span>
                100% local processing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                No server uploads
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-warning rounded-full"></span>
                Complete privacy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                WebAssembly powered
              </li>
            </ul>
          </div>

          {/* Creator Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Created by</h4>
            <div className="space-y-3">
              <Link 
                href="https://www.seyamalam.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <FaGlobe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Seyam Alam</span>
              </Link>
              <Link 
                href="https://github.com/thegr8binil/BitMorph.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>View Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} BitMorph. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by</span>
              <Link 
                href="https://www.seyamalam.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Touhidul Alam Seyam
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}