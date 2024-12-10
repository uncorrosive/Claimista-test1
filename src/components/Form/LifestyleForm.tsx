import React from 'react';
import { FormSection } from './FormSection';
import { TextInput } from './TextInput';
import { useFormContext } from '../../contexts/FormContext';

export function LifestyleForm() {
  const { formData, updateFormData, updateSocialMedia } = useFormContext();
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>(
    formData.socialMedia.map(sm => sm.platform)
  );

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev => {
      const newPlatforms = prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform];
      
      if (!newPlatforms.includes(platform)) {
        updateSocialMedia(platform, '');
      }
      return newPlatforms;
    });
  };

  return (
    <FormSection title="Lifestyle & Preferences 🌈">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What's your favorite way to shop? 🛍️
          </label>
          <select 
            className="form-input"
            value={formData.shoppingStyle}
            onChange={(e) => updateFormData('shoppingStyle', e.target.value)}
          >
            <option value="">Choose your shopping style...</option>
            <option value="online">Online retail therapy!</option>
            <option value="instore">In-store adventures</option>
            <option value="both">Best of both worlds</option>
            <option value="minimal">Minimalist shopper</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tell us about some of your favorite activities, hobbies, interests etc., 🎨
          </label>
          <textarea
            className="form-input"
            rows={3}
            value={formData.interests}
            onChange={(e) => updateFormData('interests', e.target.value)}
            placeholder="Share your interests and passions..."
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Which social media platforms do you use? 📱
          </label>
          {[
            'Instagram',
            'Facebook',
            'Twitter',
            'TikTok',
            'LinkedIn'
          ].map((platform) => (
            <div key={platform} className="space-y-2">
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  className="rounded text-blue-600"
                  checked={selectedPlatforms.includes(platform)}
                  onChange={() => handlePlatformToggle(platform)}
                />
                <span>{platform}</span>
              </label>
              {selectedPlatforms.includes(platform) && (
                <div className="ml-6">
                  <TextInput
                    label={`${platform} Handle`}
                    name={`${platform.toLowerCase()}Handle`}
                    placeholder="@yourusername"
                    value={formData.socialMedia.find(sm => sm.platform === platform)?.handle || ''}
                    onChange={(e) => updateSocialMedia(platform, e.target.value)}
                    className="max-w-xs"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </FormSection>
  );
}