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
            <h3 className="text-xl font-semibold text-white">Cookie Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="mt-4 text-gray-300">
            We use cookies to provide you with the best possible experience on our website. 
            Some are necessary for the operation of the site, while others help us improve the website 
            and personalize the user experience.
          </p>

          {showDetails && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-gray-400">
                    These cookies are required for the basic functions of the website.
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
                  <h4 className="text-white font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Help us understand how visitors interact with the website.
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
                    Used to better tailor advertising to you.
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
              {showDetails ? 'Hide' : 'Show'} settings
            </button>
            {showDetails ? (
              <button
                onClick={handleAcceptSelected}
                className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
              >
                Confirm Selection
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;