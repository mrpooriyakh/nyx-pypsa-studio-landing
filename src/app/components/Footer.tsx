import { Github, FileText, ExternalLink } from 'lucide-react';
import {
  GITHUB_REPOSITORY_URL,
  LICENSE_URL,
  PRIVACY_POLICY_URL,
  PYPSA_PROJECT_URL,
  TERMS_OF_USE_URL,
} from '../constants/links';

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-background rounded-sm" />
              </div>
              <span className="font-semibold text-lg">Nyx PyPSA Studio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Visual modeling and optimization for renewable energy systems.
            </p>
            <div className="mt-4">
              <span className="text-xs text-muted-foreground font-mono">v0.1.0-beta.1</span>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_REPOSITORY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={PYPSA_PROJECT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  PyPSA Project
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={TERMS_OF_USE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href={PRIVACY_POLICY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={LICENSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  License (MIT)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/renewable-art.png"
                alt="Renewable energy illustration"
                className="w-12 h-12 rounded-md border border-border object-cover"
              />
              <p className="text-sm text-muted-foreground">
                Done with love by {'\u067e\u0648\u0631\u06cc\u0627 \u062e\u062f\u0627\u067e\u0631\u0633\u062a'} (Pooriya Khodaparast), just an energy engineering looking to optimize things and :)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={GITHUB_REPOSITORY_URL}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#docs"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

