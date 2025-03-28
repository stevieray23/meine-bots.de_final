import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setSettings(newSettings);
    saveSettings(newSettings);
    setIsOpen(false);
  };

  const handleAcceptSelected = () => {
    saveSettings(settings);
    setIsOpen(false);
  };

  const saveSettings = (selectedSettings: CookieSettings) => {
    Cookies.set('cookie-consent', JSON.stringify(selectedSettings), { expires: 365 });
    // Here you would typically initialize/disable tracking based on settings
    if (selectedSettings.analytics) {
      // Initialize analytics
    }
    if (selectedSettings.marketing) {
      // Initialize marketing tools
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6">
      <div className="max-w-xl w-full bg-gray-900 rounded-lg shadow-lg pointer-events-auto border border-gray-800">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-white">Cookie-Einstellungen</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="mt-4 text-gray-300">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Einige sind notwendig für den Betrieb der Seite, während andere uns helfen, die Website 
            zu verbessern und das Nutzererlebnis zu personalisieren.
          </p>

          {showDetails && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Notwendige Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.necessary}
                  disabled
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Analyse Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Werden verwendet, um Werbung besser auf Sie abzustimmen.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-800 transition-colors"
            >
              Einstellungen {showDetails ? 'verbergen' : 'anzeigen'}
            </button>
            {showDetails ? (
              <button
                onClick={handleAcceptSelected}
                className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
              >
                Auswahl bestätigen
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
              >
                Alle akzeptieren
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;