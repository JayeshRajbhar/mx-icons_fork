import { useMemo, useState } from "react";
import "./App.css";
import { icons as ICONS } from "./icons";

function App() {
  const [query, setQuery] = useState("");
  const [activeVariant, setActiveVariant] = useState("outline");
  const [copiedIcon, setCopiedIcon] = useState(null);
  const [showSetup, setShowSetup] = useState(false);

  const allVariants = useMemo(() => {
    const variantSet = new Set();
    ICONS.forEach((group) => {
      group.variants.forEach((v) => variantSet.add(v.variant));
    });
    return Array.from(variantSet);
  }, []);

  const flatIcons = useMemo(() => {
    const list = [];
    ICONS.forEach((group) => {
      const variant = group.variants.find((v) => v.variant === activeVariant);
      if (variant) {
        list.push({
          groupName: group.name,
          ...variant,
        });
      }
    });
    return list;
  }, [activeVariant]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return flatIcons;
    return flatIcons.filter((icon) => icon.slug.toLowerCase().includes(q));
  }, [query, flatIcons]);

  async function copySnippet(icon) {
    const code = `import { ${icon.componentName} } from 'mx-icons'

<${icon.componentName} />`;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIcon(icon.slug);
      setTimeout(() => setCopiedIcon(null), 1500);
    } catch (e) {
      console.error("copy failed", e);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-top">
            <div className="logo-section">
              <div className="logo-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="logo-text">mxicons</h1>
              <span className="version-badge">v1.0.2</span>
            </div>
            <a
              className="share-button"
              href="https://twitter.com/intent/tweet?text=Check%20out%20MX%20Icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on Twitter
            </a>
          </div>

          <div className="header-info">
            <div className="info-item">
              <span className="info-count">{ICONS.length} icons</span>
              <span className="info-separator">·</span>
              <span className="info-text">MIT license</span>
              <span className="info-separator">·</span>
              <span className="info-text">React & Vue libraries</span>
            </div>
          </div>

          <h2 className="tagline">
            Beautiful hand-crafted SVG icons, by the makers of MX CSS.
          </h2>

          <div className="header-actions">
            <a
              className="action-button primary"
              href="https://github.com/yourusername/mx-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Documentation
            </a>
            <button
              className="action-button secondary"
              onClick={() => setShowSetup(!showSetup)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="20"
                height="20"
              >
                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Get Figma File
            </button>
          </div>
        </div>
      </header>

      {showSetup && (
        <div className="setup-guide">
          <div className="setup-content">
            <button
              className="setup-close"
              onClick={() => setShowSetup(false)}
            ></button>
            <h2>Quick Start</h2>
            <div className="setup-step">
              <h3>1. Install</h3>
              <pre className="code-snippet">npm install mx-icons</pre>
            </div>
            <div className="setup-step">
              <h3>2. Import & Use</h3>
              <pre className="code-snippet">{`import { HomeOutline, YouTubeOutline } from 'mx-icons'

<HomeOutline size={24} color="#111" />
<YouTubeOutline size={32} color="#ff0000" />`}</pre>
            </div>
            <div className="setup-step">
              <h3>3. Props</h3>
              <ul className="props-list">
                <li>
                  <code>size</code> - Icon size (default: 24)
                </li>
                <li>
                  <code>color</code> - Stroke color (default: "#111")
                </li>
                <li>
                  <code>strokeWidth</code> - Stroke width (default: 1.5)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Search all icons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="variant-tabs">
          {allVariants.map((variant) => (
            <button
              key={variant}
              className={`variant-tab ${
                activeVariant === variant ? "active" : ""
              }`}
              onClick={() => setActiveVariant(variant)}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </button>
          ))}
          <div className="variant-info">
            {activeVariant.charAt(0).toUpperCase() + activeVariant.slice(1)} •
            24×24, 1.5px stroke
          </div>
        </div>

        <div className="icons-grid">
          {filtered.map((icon) => (
            <button
              key={icon.slug}
              className="icon-card"
              onClick={() => copySnippet(icon)}
              title={`Copy ${icon.componentName}`}
            >
              <div className="icon-display">
                <icon.Component size={24} color="#111" strokeWidth={1.5} />
              </div>
              <div className="icon-name">{icon.slug}</div>
              {copiedIcon === icon.slug && (
                <div className="copied-toast">Copied!</div>
              )}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <p>No icons found matching "{query}"</p>
          </div>
        )}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>mxicons</span>
              </div>
              <p className="footer-tagline">Beautiful hand-crafted SVG icons</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="https://github.com/yourusername/mx-icons">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowSetup(true);
                      }}
                    >
                      Quick Start
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/yourusername/mx-icons">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/yourusername/mx-icons/releases">
                      Releases
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Community</h3>
                <ul>
                  <li>
                    <a href="https://github.com/yourusername/mx-icons/discussions">
                      Discussions
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">Twitter</a>
                  </li>
                  <li>
                    <a href="https://github.com/yourusername/mx-icons/issues">
                      Report Issue
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/yourusername/mx-icons/blob/main/CONTRIBUTING.md">
                      Contributing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>More</h3>
                <ul>
                  <li>
                    <a href="https://github.com/yourusername/mx-icons/blob/main/LICENSE">
                      License
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/mx-icons">
                      NPM Package
                    </a>
                  </li>
                  <li>
                    <a href="#">Figma File</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 MX Icons. Released under the MIT License.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/yourusername/mx-icons"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
